import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <ul>
        <Link to='/component'>
        <li> First Page</li>
        </Link>

        <Link to='/fetch'>
        <li> Second Page</li>
        </Link>

        <Link to='/calculatoe'>
        <li> Third Page</li>
        </Link>

        <Link to='/timer'>
        <li> Fourth Page</li>
        </Link>

        <Link to='/todolist'>
        <li> Fifth Page</li>
        </Link>

        <Link to='/dynamic'>
        <li> Six Page</li>
        </Link>
        
      </ul>
    </div>
  )
}

export default Navbar
