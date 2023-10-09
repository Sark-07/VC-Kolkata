import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='menu-left'>
            <li><Link to={''} >Student Dashboard</Link></li>
            <li><Link to={'/teacher-dashboard'} >Teacher Dashboard</Link></li>
            <li><Link to={'https://www.vckolkata63.org/'} >College Website</Link></li>
        </ul>
        <ul className="menu-right">
            <li><Link to={'/teacher-login'} >Teacher Login</Link></li>
            <li><Link to={'/student-login'} >Student Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar