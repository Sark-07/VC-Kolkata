import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home'
import Test from './pages/test/test'
import StudentLogin from './pages/StudentLogin/StudentLogin'
import PageNotFound from './components/PageNotFound'
import TeacherLogin from './pages/TeacherLogin/TeacherLogin'
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard'
import StudentDashboard from './pages/StudentDashboard/StudentDashboard'
import { Toaster } from 'react-hot-toast'
const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home/>} />
      <Route path='/student-login' index element={<StudentLogin/>} />
      <Route path='/teacher-login' index element={<TeacherLogin/>} />
      <Route path='/teacher-dashboard' index element={<TeacherDashboard index={0}/>} />
      <Route path='/teacher-dashboard/student-list' index element={<TeacherDashboard index={1}/>} />
      <Route path='/teacher-dashboard/instruction-material' index element={<TeacherDashboard index={2}/>} />
      <Route path='/teacher-dashboard/teaching-plan' index element={<TeacherDashboard index={3}/>} />
      <Route path='/teacher-dashboard/notification' index element={<TeacherDashboard index={4}/>} />
      <Route path='/teacher-dashboard/e-books' index element={<TeacherDashboard index={5}/>} />
      <Route path='/teacher-dashboard/question-bank' index element={<TeacherDashboard index={6}/>} />
      <Route path='/teacher-dashboard/ppt-class' index element={<TeacherDashboard index={7}/>} />
      <Route path='/teacher-dashboard/video-lesson' index element={<TeacherDashboard index={8}/>} />
      <Route path='/teacher-dashboard/university-question' index element={<TeacherDashboard index={9}/>} />
      <Route path='/teacher-dashboard/student-query' index element={<TeacherDashboard index={10}/>} />
      <Route path='/teacher-dashboard/college-exam' index element={<TeacherDashboard index={11}/>} />
      <Route path='/teacher-dashboard/settings' index element={<TeacherDashboard index={12}/>} />
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