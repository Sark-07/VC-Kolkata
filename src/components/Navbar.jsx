import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, checkRole, logout } = useAuth();
  return (
    <div className='navbar'>
        <ul className='menu-left'>
            <li style={checkRole() === 'teacher' ? {display: 'none'} : {display: 'inline'}}><Link to={''} >Student Dashboard</Link></li>
            <li style={checkRole() === 'student' ? {display: 'none'} : {display: 'inline'}}><Link to={'/teacher-dashboard'} >Teacher Dashboard</Link></li>
            <li><Link to={'https://www.vckolkata63.org/'} >College Website</Link></li>
        </ul>
        <ul className="menu-right" style={isAuthenticated() ? {display: 'none'} : {display: 'flex'}}>
            <li><Link to={'/teacher-login'} >Teacher Login</Link></li>
            <li><Link to={'/student-login'} >Student Login</Link></li>
        </ul>
        <span onClick={() => logout()} style={!isAuthenticated() ? {display: 'none'} : {display: 'inline-block',cursor: 'pointer', fontWeight: 600}}>Logout</span>
    </div>
  )
}

export default Navbar