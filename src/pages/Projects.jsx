import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'


export default function Projects() {
  return (
    <div><h1>Projects</h1>
    <Routes><Route to="projects/codepen" element={<h1>My Codepen</h1>}></Route>
    </Routes>
    
    </div>
  )
}
