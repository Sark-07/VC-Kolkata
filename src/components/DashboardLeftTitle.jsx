import React from 'react'
import { ReactComponent as Logo } from '../assets/svg/logo.svg';

const DashboardLeftTitle = () => {
  return (
    <div className='Dashboard-left-title'>
        <div className="dashboard-logo">
        <Logo className='logo-icon'></Logo>
          <h6>Vivekananda College</h6>
        </div>
    </div>
  )
}

export default DashboardLeftTitle