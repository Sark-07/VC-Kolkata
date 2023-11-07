import React, {useContext, useEffect} from 'react'
import StudentDashboardMain from '../../components/Dashboard/StudentDashboardMain'
import { SidebarContext } from '../../contexts/SidebarContext'

const StudentDashboard = ({index}) => {

  const {setOption} = useContext(SidebarContext)
  useEffect(() => {
    setOption(index)   
  }, [index])
  return (
    <>
    <StudentDashboardMain option={index}/>
    </>
  )
}

export default StudentDashboard