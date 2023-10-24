import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

const DashboardLeftTitle = () => {
  return (
    <div className='Dashboard-left-title'>
        <Link to={'/'} className="dashboard-logo">
        <Logo className='logo-icon'></Logo>
          <h6>Vivekananda College</h6>
        </Link>
    </div>
  )
}

export default DashboardLeftTitle