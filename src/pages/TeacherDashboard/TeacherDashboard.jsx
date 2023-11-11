import React, {useContext, useEffect} from 'react'
import { SidebarContext } from '../../contexts/SidebarContext'
import DashboardMain from '../../components/Dashboard/DashboardMain'
const TeacherDashboard = ({index}) => {

  const {setOption} = useContext(SidebarContext)

  useEffect(() => {
    setOption(index)   
  }, [index])
  
  return (
    <>
    <DashboardMain option = {index}/>
    </>
  )
}

export default TeacherDashboard