import { Link } from 'react-router-dom';
import React from 'react'

export default function NotFound() {
  return (
    <div><h1>This Page is NotFound</h1>
        Go <Link className='edit' to="/">Home</Link>
    </div>
  )
}
