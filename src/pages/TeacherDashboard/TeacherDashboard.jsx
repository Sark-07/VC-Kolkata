import React, {useContext, useEffect} from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import { SidebarContext } from '../../contexts/SidebarContext'
const TeacherDashboard = ({index}) => {

  const {setOption} = useContext(SidebarContext)

  useEffect(() => {
    setOption(index)   
  }, [index])
  
  return (
    <>
    <Dashboard option = {index}/>
    </>
  )
}

export default TeacherDashboard