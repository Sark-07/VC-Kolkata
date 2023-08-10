import React from 'react';
import { Link } from 'react-router-dom';

const LatestUpdate = () => {
  return (
    <div className='marquee'>
      <marquee loop={true} direction='left'>
        <Link to={''}>Latest News: lorem</Link>
      </marquee>
    </div>
  );
};

export default LatestUpdate;
