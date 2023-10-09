import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  PiChalkboardTeacherFill,
  PiStudentDuotone,
  PiExamBold,
} from 'react-icons/pi';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { LiaUniversitySolid } from 'react-icons/lia';
import { TbAntennaBars5 } from 'react-icons/tb';
import { IoIosSettings } from 'react-icons/io';
import { BsFiletypePpt } from 'react-icons/bs';
import { SlNotebook } from 'react-icons/sl';
import { LuVideo } from 'react-icons/lu';
import {
  MdOutlineNotificationsActive,
  MdQueryStats,
  MdOutlineIntegrationInstructions,
} from 'react-icons/md';
import { SidebarContext } from '../../contexts/SidebarContext';
const DashboardLeftcontainerItems = () => {
  const [active, setActive] = useState(0);
  const {option} = useContext(SidebarContext)

  // let item = [
  //   <>
  //     <Link to={`/teacher-dashboard`}>
  //       <TbAntennaBars5 style={active == 0 && { color: '#6366f1' }} />
  //       Overview
  //     </Link>
  //   </>,
  //   <>
  //     <PiStudentDuotone style={active == 1 && { color: '#6366f1' }} />
  //     Student List
  //   </>,
  //   <>
  //     <MdOutlineIntegrationInstructions
  //       style={active == 2 && { color: '#6366f1' }}
  //     />
  //     Instruction Material
  //   </>,
  //   <>
  //     <PiChalkboardTeacherFill style={active == 3 && { color: '#6366f1' }} />
  //     Teaching Plan
  //   </>,
  //   <span onClick={() => console.log('hi')}>
  //     <MdOutlineNotificationsActive
  //       style={active == 4 && { color: '#6366f1' }}
  //     />
  //     Notification
  //   </span>,
  //   <>
  //     <SlNotebook style={active == 5 && { color: '#6366f1' }} />
  //     E-books
  //   </>,
  //   <>
  //     <FaRegQuestionCircle style={active == 6 && { color: '#6366f1' }} />
  //     Question Bank
  //   </>,
  //   <>
  //     <Link to={`/teacher-dashboard/pptclass`}>
  //       <BsFiletypePpt style={active == 7 && { color: '#6366f1' }} />
  //       PPT Class
  //     </Link>
  //   </>,
  //   <>
  //     <LuVideo style={active == 8 && { color: '#6366f1' }} />
  //     Video Lesson
  //   </>,
  //   <>
  //     <LiaUniversitySolid style={active == 9 && { color: '#6366f1' }} />
  //     University Question
  //   </>,
  //   <>
  //     <MdQueryStats style={active == 10 && { color: '#6366f1' }} />
  //     Student Query
  //   </>,
  //   <>
  //     <PiExamBold style={active == 11 && { color: '#6366f1' }} />
  //     College exam
  //   </>,
  //   <>
  //     <IoIosSettings style={active == 12 && { color: '#6366f1' }} />
  //     Settings
  //   </>,
  // ];

  return (
    <ul className='dashboard-items-container'>
      {/* {
            menus.map((items, index) => {
                return <li key={index} onClick={() => {setActive(index), setOption(index)}} className={`${index === active && 'active-bg'}`}><Link to={items.path}>{items.menu}</Link></li>
            })
        } */}

      <li className={`${option === 0 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard`}>
          <TbAntennaBars5 style={option == 0 && { color: '#6366f1' }} />
          Overview
        </Link>
      </li>
      <li className={`${option === 1 && 'active-bg'}`}>
        <Link to={'/teacher-dashboard/student-list'}>
          <PiStudentDuotone style={option == 1 && { color: '#6366f1' }} />
          Student List
        </Link>
      </li>
      <li className={`${option === 2 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/instruction-material`}>
          <MdOutlineIntegrationInstructions
            style={option == 2 && { color: '#6366f1' }}
          />
          Instruction Material
        </Link>
      </li>
      <li className={`${option === 3 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/teaching-plan`}>
          <PiChalkboardTeacherFill
            style={option == 3 && { color: '#6366f1' }}
          />
          Teaching Plan
        </Link>
      </li>
      <li className={`${option === 4 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/notification`}>
          <MdOutlineNotificationsActive
            style={option == 4 && { color: '#6366f1' }}
          />
          Notification
        </Link>
      </li>
      <li className={`${option === 5 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/e-books`}>
          <SlNotebook style={option == 5 && { color: '#6366f1' }} />
          E-books
        </Link>
      </li>
      <li className={`${option === 6 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/question-bank`}>
          <FaRegQuestionCircle style={option == 6 && { color: '#6366f1' }} />
          Question Bank
        </Link>
      </li>
      <li className={`${option === 7 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/ppt-class`}>
          <BsFiletypePpt style={option == 7 && { color: '#6366f1' }} />
          PPT Class
        </Link>
      </li>
      <li className={`${option === 8 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/video-lesson`}>
          <LuVideo style={option == 8 && { color: '#6366f1' }} />
          Video Lesson
        </Link>
      </li>
      <li className={`${option === 9 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/university-question`}>
          <LiaUniversitySolid style={option == 9 && { color: '#6366f1' }} />
          University Question
        </Link>
      </li>
      <li className={`${option === 10 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/student-query`}>
          <MdQueryStats style={option == 10 && { color: '#6366f1' }} />
          Student Query
        </Link>
      </li>
      <li className={`${option === 11 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/college-exam`}>
          <PiExamBold style={option == 11 && { color: '#6366f1' }} />
          College exam
        </Link>
      </li>
      <li className={`${option === 12 && 'active-bg'}`}>
        <Link to={`/teacher-dashboard/settings`}>
          <IoIosSettings style={option == 12 && { color: '#6366f1' }} />
          Settings
        </Link>
      </li>
    </ul>
  );
};

export default DashboardLeftcontainerItems;
