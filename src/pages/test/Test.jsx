import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Test = () => {
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
    <div className="slider">
            <Slider {...settings}>
            <div className='carousel'>
            <img src="https://images.shiksha.com/mediadata/images/1539752549phpJePe6G.jpeg" alt="carousel-image-1" />
            </div>
            <div className='carousel'> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/View_of_UG_Science_Block_of_Vivekananda_College_from_Administrative_Block.jpg" alt="carousel-image-2" />
            </div>
            <div className='carousel'>
            <img src="https://www.collegebatch.com/static/clg-gallery/vivekananda-college-kolkata-213495.jpg" alt="carousel-image-3" />
            </div>
            </Slider>
    </div>
  )
}

export default Test
