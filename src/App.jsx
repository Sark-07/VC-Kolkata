import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home'
import Test from './pages/test/test'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home/>} />
      <Route path='/test' index element={<Test/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App