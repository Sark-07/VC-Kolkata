import React, {useContext, useEffect} from 'react'
import StudentDashboardMain from '../../components/Dashboard/StudentDashboardMain'
import { SidebarContext } from '../../contexts/SidebarContext'
import TeacherDashboardMain from '../../components/Dashboard/TeacherDashboardMain'

const StudentDashboard = ({index}) => {

  const {setOption} = useContext(SidebarContext)
  useEffect(() => {
    setOption(index)   
  }, [index])
  return (
    <>
    <TeacherDashboardMain option={index}/>
    </>
  )
}

export default StudentDashboard