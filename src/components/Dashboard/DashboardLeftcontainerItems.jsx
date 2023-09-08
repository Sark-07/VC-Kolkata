import React, {useState} from 'react'
import {PiChalkboardTeacherFill, PiStudentDuotone, PiExamBold} from 'react-icons/pi'
import {FaRegQuestionCircle} from 'react-icons/fa'
import {LiaUniversitySolid} from 'react-icons/lia'
import {TbAntennaBars5} from 'react-icons/tb'
import {IoIosSettings} from 'react-icons/io'
import {BsFiletypePpt} from 'react-icons/bs'
import {SlNotebook} from 'react-icons/sl'
import {LuVideo} from 'react-icons/lu'
import {MdOutlineNotificationsActive, MdQueryStats, MdOutlineIntegrationInstructions} from 'react-icons/md'
const DashboardLeftcontainerItems = () => {

    const [active, setActive] = useState(0)

    let item = [<><TbAntennaBars5 style={active == 0 && {color: '#6366f1'}}/>Overview</>, <><PiStudentDuotone style={active == 1 && {color: '#6366f1'}}/>Student List</>, <><MdOutlineIntegrationInstructions style={active == 2 && {color: '#6366f1'}}/>Instruction Material</>, <><PiChalkboardTeacherFill style={active == 3 && {color: '#6366f1'}}/>Teaching Plan</>,  <><MdOutlineNotificationsActive style={active == 4 && {color: '#6366f1'}}/>Notification</>, <><SlNotebook style={active == 5 && {color: '#6366f1'}}/>E-books</>,<><FaRegQuestionCircle style={active == 6 && {color: '#6366f1'}}/>Question Bank</>,<><BsFiletypePpt style={active == 7 && {color: '#6366f1'}}/>PPT Class</>, <><LuVideo style={active == 8 && {color: '#6366f1'}}/>Video Lesson</>,<><LiaUniversitySolid style={active == 9 && {color: '#6366f1'}}/>University Question</>,<><MdQueryStats style={active == 10 && {color: '#6366f1'}}/>Student Query</>,<><PiExamBold style={active == 11 && {color: '#6366f1'}}/>College 
    exam</>,<><IoIosSettings style={active == 12 && {color: '#6366f1'}}/>Settings</>]
  

  return (
    <ul className='dashboard-items-container'>       
        {
            item.map((items, index) => {
                return <li key={index} onClick={() => setActive(index)} className={`${index === active && 'active-bg'}`}>{items}</li>
            })
        }
    </ul>
  )
}

export default DashboardLeftcontainerItems