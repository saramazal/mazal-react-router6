import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
   
const postQuery = searchParams.get('post') || '';
const latest = searchParams.has('latest');

const startsFrom = latest ? 80 : 1;

const handleSubmit = (e) => {
  e.preventDefault(); 
  const form = e.target;

  const query = form.search.value;
  const isLatest = form.latest.checked;

  const params = {};
  if (query.length) params.post = query;
  if (isLatest) params.latest = true;

  setSearchParams(params);
}


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  return ( 
    <div >
      <h1> Our News </h1> 
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="search" name="search" />
        <label className="latest">
          <input type="checkbox" name="latest" /> New Only
        </label>
        <input type="submit" value="Search" />
      </form>
      <Link className = 'edit'
      to = '/posts/new'> Add a New Post 
      </Link> 
      { posts.filter(
        post => post.title.includes(postQuery) && post.id >= startsFrom
        ).map(post => ( 
        <Link key = {post.id}
        to = {`/posts/${post.id}`} >
        <li className = "post" > {post.title} </li> 
        </Link >
      ))
    } <
    /div>
)
}