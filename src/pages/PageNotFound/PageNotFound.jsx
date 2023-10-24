import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Lottie from "lottie-react";
import './PageNotFound.css/pageNotFound.css'
import PageNotFoundAnimation from '../../assets/animations/pageNotFound.json'

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