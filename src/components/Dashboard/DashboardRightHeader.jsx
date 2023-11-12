import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { PiBellRingingBold } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const DashboardRightHeader = () => {
  const { logout } = useAuth();
  const [click, setClick] = useState(false);
  const pathname = window.location.pathname;
  const baseUrl = pathname.split('/')[1];
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <>
      <div className='dashboard-right-header'>
        <div className='search'>
          <BsSearch />
        </div>
        <div className='notificatin-DP'>
          <div className='bell'>
            <PiBellRingingBold />
          </div>
          <div className='DP' onClick={() => setClick(!click)}>
            <Link
              to={`${baseUrl == 'student-dashboard' ? '' : '/teacher-dashboard/profile'}`}
            >
              <img
                src='https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                alt='user-dp'
              />
            </Link>
          </div>
          {baseUrl == 'student-dashboard' && click && (
            <div className={`logout`} onClick={handleLogout}>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardRightHeader;
