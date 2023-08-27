import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Lottie from "lottie-react";
import './Components.css/components.css'
import PageNotFoundAnimation from '../assets/animations/pageNotFound.json'

const PageNotFound = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="page-not-found">
      {/* <h1>Oops! 404 Page Not Found!</h1> */}
      <Lottie animationData={PageNotFoundAnimation} loop={true} />
      
    </div>
    </>
  )
}

export default PageNotFound