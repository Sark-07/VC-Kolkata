import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home'
import Test from './pages/test/test'
import StudentLogin from './pages/StudentLogin/StudentLogin'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home/>} />
      <Route path='/student-login' index element={<StudentLogin/>} />
      <Route path='/test' index element={<Test/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App