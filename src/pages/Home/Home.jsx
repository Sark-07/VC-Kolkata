import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import LatestUpdate from '../../components/LatestUpdate'
import Hero from './Hero'
import './Home.css/home.css'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Navbar/>
        <LatestUpdate/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home