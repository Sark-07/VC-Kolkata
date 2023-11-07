import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Test from './pages/test/test'
import StudentLogin from './pages/StudentLogin/StudentLogin'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import TeacherLogin from './pages/TeacherLogin/TeacherLogin'
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard'
import StudentDashboard from './pages/StudentDashboard/StudentDashboard'
import { StudentProtectedRoute, TeacherProtectedRoute } from './contexts/ProtectedRoute'
import { Toaster } from 'react-hot-toast'
import './index.css'
const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home/>} />
      <Route path='/student-login' element={<StudentLogin/>} />
      <Route path='/teacher-login' element={<TeacherLogin/>} />
      <Route path='/teacher-dashboard' element={<TeacherProtectedRoute><TeacherDashboard index={0}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/student-list' element={<TeacherProtectedRoute><TeacherDashboard index={1}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/study-material' element={<TeacherProtectedRoute><TeacherDashboard index={2}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/study-material/fetch' element={<TeacherProtectedRoute><TeacherDashboard index={2}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/study-material/add' element={<TeacherProtectedRoute><TeacherDashboard index={2}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/study-material/edit' element={<TeacherProtectedRoute><TeacherDashboard index={2}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/teaching-plan' element={<TeacherProtectedRoute><TeacherDashboard index={3}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/teaching-plan/fetch' element={<TeacherProtectedRoute><TeacherDashboard index={3}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/teaching-plan/add' element={<TeacherProtectedRoute><TeacherDashboard index={3}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/notification' element={<TeacherProtectedRoute><TeacherDashboard index={4}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/notification/fetch' element={<TeacherProtectedRoute><TeacherDashboard index={4}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/notification/add' element={<TeacherProtectedRoute><TeacherDashboard index={4}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/e-books' element={<TeacherProtectedRoute><TeacherDashboard index={5}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/e-books/add' element={<TeacherProtectedRoute><TeacherDashboard index={5}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/question-bank' element={<TeacherProtectedRoute><TeacherDashboard index={6}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/question-bank/add' element={<TeacherProtectedRoute><TeacherDashboard index={6}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/question-bank/fetch' element={<TeacherProtectedRoute><TeacherDashboard index={6}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/ppt-class' element={<TeacherProtectedRoute><TeacherDashboard index={7}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/ppt-class/fetch' element={<TeacherProtectedRoute><TeacherDashboard index={7}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/ppt-class/add' element={<TeacherProtectedRoute><TeacherDashboard index={7}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/video-lesson' element={<TeacherProtectedRoute><TeacherDashboard index={8}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/video-lesson/fetch' element={<TeacherProtectedRoute><TeacherDashboard index={8}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/video-lesson/add' element={<TeacherProtectedRoute><TeacherDashboard index={8}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/university-question' element={<TeacherProtectedRoute><TeacherDashboard index={9}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/university-question/fetch' element={<TeacherProtectedRoute><TeacherDashboard index={9}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/university-question/add' element={<TeacherProtectedRoute><TeacherDashboard index={9}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/student-query' element={<TeacherProtectedRoute><TeacherDashboard index={10}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/college-exam' element={<TeacherProtectedRoute><TeacherDashboard index={11}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/college-exam/fetch' element={<TeacherProtectedRoute><TeacherDashboard index={11}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/college-exam/add' element={<TeacherProtectedRoute><TeacherDashboard index={11}/></TeacherProtectedRoute>} />
      <Route path='/teacher-dashboard/profile' element={<TeacherProtectedRoute><TeacherDashboard index={12}/></TeacherProtectedRoute>} />
      <Route path='/student-dashboard' element={<StudentProtectedRoute><StudentDashboard index={0}/></StudentProtectedRoute>} />
      <Route path='*' element={<PageNotFound/>} />
      <Route path='/test' element={<Test/>} />
    </Routes>
    </BrowserRouter>
    <Toaster/>
    </>
  )
}

export default App