import React from 'react'
import {AiTwotoneNotification} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      };

  return (
    <div className='hero'>
        <div className="hero-left">
            <div className="notice">
                <h3 className='notice-head'><AiTwotoneNotification/>Notice
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
                    <span>View Archived Notice</span> | <span>View sports Notice</span>
                </div>
            </div>
        </div>
        <div className="hero-right">
            <div className="slider">
            <Slider {...settings}>
            <div>
            <h3>SLIDE 1</h3>
            </div>
            <div>
            <h3>SLIDE 2</h3>
            </div>
            <div>
            <h3>SLIDE 3</h3>
            </div>
            <div>
            <h3>SLIDE 4</h3>
            </div>
            <div>
            <h3>SLIDE 5</h3>
            </div>
            <div>
            <h3>SLIDE 6</h3>
            </div>
        </Slider>
            </div>
        </div>
    </div>
  )
}

export default Hero