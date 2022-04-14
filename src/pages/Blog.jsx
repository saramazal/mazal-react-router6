import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom'

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useState();
   
const postquery = searchParams.get('post') || '';



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  return ( 
    <div >
      <h1> Our News </h1> 
      <Link className = 'edit'
      to = '/posts/new'> Add a New Post 
      </Link> 
      { posts.map(post => ( <Link key = {post.id}
        to = {`/posts/${post.id}`} >
        <li className = "post" > {post.title} </li> 
        </Link >
      ))
    } <
    /div>
)
}