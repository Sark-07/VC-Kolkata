import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {PiBellRingingBold} from 'react-icons/pi'
import { Link } from 'react-router-dom'

const DashboardRightHeader = () => {
  return (
    <>
    <div className="dashboard-right-header">
        <div className="search">
            <BsSearch/>
        </div>
        <div className="notificatin-DP">
            <div className="bell">
                <PiBellRingingBold/>
            </div>
            <div className="DP">
                <Link to={'/teacher-dashboard/profile'}><img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="user-dp" /></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default DashboardRightHeader