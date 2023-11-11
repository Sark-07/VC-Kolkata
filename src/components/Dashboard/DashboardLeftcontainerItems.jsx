import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  PiChalkboardTeacherFill,
  PiStudentDuotone,
  PiExamBold,
} from 'react-icons/pi';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { LiaUniversitySolid } from 'react-icons/lia';
import { TbAntennaBars5 } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { BsFiletypePpt } from 'react-icons/bs';
import { SlNotebook } from 'react-icons/sl';
import { LuVideo } from 'react-icons/lu';
import { SiJquery } from 'react-icons/si';
import {
  MdOutlineNotificationsActive,
  MdQueryStats,
  MdOutlineIntegrationInstructions,
} from 'react-icons/md';
import { SidebarContext } from '../../contexts/SidebarContext';
import { AuthContext } from '../../contexts/AuthContext';
const DashboardLeftcontainerItems = () => {
  const { option } = useContext(SidebarContext);
  const { checkRole } = useContext(AuthContext);
  let basePath = ''
  if (checkRole() === 'student'){
    basePath = 'student-dashboard'
  }else{
    
    basePath = 'teacher-dashboard'
  }
  return (
    <ul className='dashboard-items-container'>
      <li className={`${option === 0 && 'active-bg'}`}>
        <Link to={`/${basePath}`}>
          <TbAntennaBars5 style={option == 0 && { color: '#6366f1' }} />
          Overview
        </Link>
      </li>
      <li className={`${option === 1 && 'active-bg'} ${checkRole() === 'student' && 'hide'}`}>
        <Link to={`/teacher-dashboard/student-list`}>
          <PiStudentDuotone style={option == 1 && { color: '#6366f1' }} />
          Student List
        </Link>
      </li>
      <li className={`${option === 2 && 'active-bg'}`}>
        <Link to={`/${basePath}/study-material`}>
          <MdOutlineIntegrationInstructions
            style={option == 2 && { color: '#6366f1' }}
          />
          Study Material
        </Link>
      </li>
      <li className={`${option === 3 && 'active-bg'}`}>
        <Link to={`/${basePath}/teaching-plan`}>
          <PiChalkboardTeacherFill
            style={option == 3 && { color: '#6366f1' }}
          />
          Teaching Plan
        </Link>
      </li>
      <li className={`${option === 4 && 'active-bg'}`}>
        <Link to={`/${basePath}/notification`}>
          <MdOutlineNotificationsActive
            style={option == 4 && { color: '#6366f1' }}
          />
          Notification
        </Link>
      </li>
      <li className={`${option === 5 && 'active-bg'}`}>
        <Link to={`/${basePath}/e-books`}>
          <SlNotebook style={option == 5 && { color: '#6366f1' }} />
          E-books
        </Link>
      </li>
      <li className={`${option === 6 && 'active-bg'}`}>
        <Link to={`/${basePath}/question-bank`}>
          <FaRegQuestionCircle style={option == 6 && { color: '#6366f1' }} />
          Question Bank
        </Link>
      </li>
      <li className={`${option === 7 && 'active-bg'}`}>
        <Link to={`/${basePath}/ppt-class`}>
          <BsFiletypePpt style={option == 7 && { color: '#6366f1' }} />
          PPT Class
        </Link>
      </li>
      <li className={`${option === 8 && 'active-bg'}`}>
        <Link to={`/${basePath}/video-lesson`}>
          <LuVideo style={option == 8 && { color: '#6366f1' }} />
          Video Lesson
        </Link>
      </li>
      <li className={`${option === 9 && 'active-bg'}`}>
        <Link to={`/${basePath}/university-question`}>
          <LiaUniversitySolid style={option == 9 && { color: '#6366f1' }} />
          University Question
        </Link>
      </li>
      <li className={`${option === 10 && 'active-bg'}`}>
        <Link to={`/${basePath}/student-query`}>
          <MdQueryStats style={option == 10 && { color: '#6366f1' }} />
          {basePath === 'student-dashboard' ? 'Query List' : 'Student Query'}
        </Link>
      </li>
      <li className={`${option === 11 && 'active-bg'}`}>
        <Link to={`/${basePath}/college-exam`}>
          <PiExamBold style={option == 11 && { color: '#6366f1' }} />
          College exam
        </Link>
      </li>
      <li className={`${option === 12 && 'active-bg'} ${checkRole() === 'student' && 'hide'}`}>
        <Link to={`/teacher-dashboard/profile`}>
          <CgProfile style={option == 12 && { color: '#6366f1' }} />
          Profile
        </Link>
      </li>
      <li className={`${option === 13 && 'active-bg'} ${checkRole() === 'teacher' && 'hide'}`}>
        <Link to={`/student-dashboard/query-to-teacher`}>
          <SiJquery style={option == 13 && { color: '#6366f1' }} />
          Query to Teacher
        </Link>
      </li>
    </ul>
  );
};

export default DashboardLeftcontainerItems;
