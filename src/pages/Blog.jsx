import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'
import BlogFilter  from '../components/BlogFilter';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
   
const postQuery = searchParams.get('post') || '';
const latest = searchParams.has('latest');

const startsFrom = latest ? 80 : 1;



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  return ( 
    <div >
      <h1> Our News </h1> 
      <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
      
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