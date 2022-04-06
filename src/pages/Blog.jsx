import React from 'react'

import {
  useState,
  useEffect
} from 'react';
import {
  Link,
  useLocation
} from 'react-router-dom'

export default function Blog() {
  const [posts, setPosts] = useState([]);
  console.log(useLocation([]))

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