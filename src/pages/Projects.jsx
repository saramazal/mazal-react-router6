import React from 'react'
import { Outlet, Link } from 'react-router-dom'


export default function Projects() {
  return (
    <div><h1>My Projects</h1>
    <ul>
      <li><Link className="links" to="static">Static </Link></li>
      <li><Link className="links" to="react">React</Link></li>
      <li><Link className="links" to="express">Express</Link></li>
      <li><Link className="links" to="fullstack">Fullstack</Link></li>
      <li><Link className="links" to="codepen">Codepen</Link></li>

    </ul>
    <Outlet />
    
    </div>
  )
}
