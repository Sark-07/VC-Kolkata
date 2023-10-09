import React, {useContext} from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import { SidebarContext } from '../../contexts/SidebarContext'
const TeacherDashboard = ({index}) => {

  const {setOption} = useContext(SidebarContext)
  setOption(index)
  return (
    <>
    <Dashboard/>
    </>
  )
}

export default TeacherDashboard