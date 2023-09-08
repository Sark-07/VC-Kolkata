import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home'
import Test from './pages/test/test'
import StudentLogin from './pages/StudentLogin/StudentLogin'
import PageNotFound from './components/PageNotFound'
import TeacherLogin from './pages/TeacherLogin/TeacherLogin'
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard'
import StudentDashboard from './pages/StuddntDashboard/StudentDashboard'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home/>} />
      <Route path='/student-login' index element={<StudentLogin/>} />
      <Route path='/teacher-login' index element={<TeacherLogin/>} />
      <Route path='/teacher-dashboard' index element={<TeacherDashboard/>} />
      <Route path='/student-dashboard' index element={<StudentDashboard/>} />
      <Route path='*' index element={<PageNotFound/>} />
      <Route path='/test' index element={<Test/>} />
    </Routes>
    </BrowserRouter>
    <Toaster/>
    </>
  )
}

export default App