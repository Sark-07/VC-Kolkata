import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='menu-left'>
            <li><Link to={''} >Home</Link></li>
            <li><Link to={''} >Student Dashboard</Link></li>
            <li><Link to={''} >Teacher Dashboard</Link></li>
            <li><Link to={''} >College Website</Link></li>
        </ul>
        <ul className="menu-right">
            <li><Link to={''} >Teacher Login</Link></li>
            <li><Link to={''} >Student Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar