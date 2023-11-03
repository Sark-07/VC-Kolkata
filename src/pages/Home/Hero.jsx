import React from 'react'
import {AiTwotoneNotification} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import HeroSlider from './HeroSlider'
// import Test from '../test/test'

const Hero = () => {

  return (
    <div className='hero'>
        <div className="hero-left">
            <div className="notice">
                <h3 className='notice-head'><AiTwotoneNotification/>Instructions
                </h3>
                <div className="notice-items">
                    <div className="item">
                        <span className='notice-date'>17.12.2023</span>
                        <p>College will be closed on 15th Aug. <span className='read-more'><Link to={''}>Read More</Link></span></p>
                    </div>
                    <div className="item">
                        <span className='notice-date'>17.12.2023</span>
                        <p>College will be closed on 15th Aug. <span className='read-more'><Link to={''}>Read More</Link></span></p>
                    </div>
                    <div className="item">
                        <span className='notice-date'>17.12.2023</span>
                        <p>College will be closed on 15th Aug. <span className='read-more'><Link to={''}>Read More</Link></span></p>
                    </div>
                    <div className="item">
                        <span className='notice-date'>17.12.2023</span>
                        <p>College will be closed on 15th Aug. <span className='read-more'><Link to={''}>Read More</Link></span></p>
                    </div>
                    <div className="item">
                        <span className='notice-date'>17.12.2023</span>
                        <p>College will be closed on 15th Aug. <span className='read-more'><Link to={''}>Read More</Link></span></p>
                    </div>
                    <div className="item">
                        <span className='notice-date'>17.12.2023</span>
                        <p>College will be closed on 15th Aug. <span className='read-more'><Link to={''}>Read More</Link></span></p>
                    </div>
                    <div className="item">
                        <span className='notice-date'>17.12.2023</span>
                        <p>College will be closed on 15th Aug. <span className='read-more'><Link to={''}>Read More</Link></span></p>
                    </div>
                    <div className="item">
                        <span className='notice-date'>17.12.2023</span>
                        <p>College will be closed on 15th Aug. <span className='read-more'><Link to={''}>Read More</Link></span></p>
                    </div>
                </div>
                <div className="archived-notice">
                    <Link>View Archived Notice</Link> | <Link>View sports Notice</Link>
                </div>
            </div>
        </div>
        <div className="hero-right">
            <HeroSlider/>
            {/* <Test/> */}
        </div>
    </div>
  )
}

export default Hero