import React, {useContext, useEffect} from 'react'
import { SidebarContext } from '../../contexts/SidebarContext'
import TeacherDashboardMain from '../../components/Dashboard/TeacherDashboardMain'
const TeacherDashboard = ({index}) => {

  const {setOption} = useContext(SidebarContext)

  useEffect(() => {
    setOption(index)   
  }, [index])
  
  return (
    <>
    <TeacherDashboardMain option = {index}/>
    </>
  )
}

export default TeacherDashboard