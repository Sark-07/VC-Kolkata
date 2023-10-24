import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home'
import Test from './pages/test/test'
import StudentLogin from './pages/StudentLogin/StudentLogin'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import TeacherLogin from './pages/TeacherLogin/TeacherLogin'
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard'
import StudentDashboard from './pages/StudentDashboard/StudentDashboard'
import { StudentProtectedRoute, TeacherProtectedRoute } from './contexts/ProtectedRoute'
import { Toaster } from 'react-hot-toast'
const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home/>} />
      <Route path='/student-login' index element={<StudentLogin/>} />
      <Route path='/teacher-login' index element={<TeacherLogin/>} />
      <Route path='/teacher-dashboard' index element={<TeacherProtectedRoute><TeacherDashboard index={0}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/student-list' index element={<TeacherProtectedRoute><TeacherDashboard index={1}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/study-material' index element={<TeacherProtectedRoute><TeacherDashboard index={2}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/study-material/fetch' index element={<TeacherProtectedRoute><TeacherDashboard index={2}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/study-material/add-material' index element={<TeacherProtectedRoute><TeacherDashboard index={2}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/study-material/edit' index element={<TeacherProtectedRoute><TeacherDashboard index={2}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/teaching-plan' index element={<TeacherProtectedRoute><TeacherDashboard index={3}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/notification' index element={<TeacherProtectedRoute><TeacherDashboard index={4}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/e-books' index element={<TeacherProtectedRoute><TeacherDashboard index={5}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/question-bank' index element={<TeacherProtectedRoute><TeacherDashboard index={6}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/question-bank/add' index element={<TeacherProtectedRoute><TeacherDashboard index={6}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/question-bank/fetch' index element={<TeacherProtectedRoute><TeacherDashboard index={6}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/ppt-class' index element={<TeacherProtectedRoute><TeacherDashboard index={7}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/ppt-class/fetch' index element={<TeacherProtectedRoute><TeacherDashboard index={7}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/ppt-class/add' index element={<TeacherProtectedRoute><TeacherDashboard index={7}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/video-lesson' index element={<TeacherProtectedRoute><TeacherDashboard index={8}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/video-lesson/fetch' index element={<TeacherProtectedRoute><TeacherDashboard index={8}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/video-lesson/add' index element={<TeacherProtectedRoute><TeacherDashboard index={8}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/university-question' index element={<TeacherProtectedRoute><TeacherDashboard index={9}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/university-question/fetch' index element={<TeacherProtectedRoute><TeacherDashboard index={9}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/university-question/add' index element={<TeacherProtectedRoute><TeacherDashboard index={9}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/student-query' index element={<TeacherProtectedRoute><TeacherDashboard index={10}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/college-exam' index element={<TeacherProtectedRoute><TeacherDashboard index={11}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/settings' index element={<TeacherProtectedRoute><TeacherDashboard index={12}/></TeacherProtectedRoute>} />
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