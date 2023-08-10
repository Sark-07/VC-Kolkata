import React from 'react'
import { Link } from 'react-router-dom';
import {IoMdMail} from 'react-icons/io'
import {BsFillTelephoneFill, BsFacebook, BsTwitter, BsYoutube} from 'react-icons/bs'
import { ReactComponent as Logo } from "../assets/svg/logo.svg";

const Header = () => {
  return (
    <div className='header'>
        <div className="header-left">
            <div className="header-vc-logo">
                <Logo/>
            </div>
            <div className="header-left-content">
                <h1 className='header-left-title'>Vivekananda college</h1>
                <h3 className='rank'>Ranked "<span className='grade'>A</span>" By NAAC</h3>
                <p className="address">269, Diamond Harbour Road, Thakurpukur Kolkata – 700063</p>
            </div>
        </div>
        <div className="header-right">
                <div className='header-right-title'><img src="../../../src/assets/images/Bengali-title.png" alt="Bengali title" /></div>
                <p className="links"><Link to={'#'}>RTI</Link> | <Link to={'#'}>NIRF</Link> | <Link to={'#'}>N-LIST</Link> | <Link to={'#'}>Important Links</Link> | <Link to={'#'}>Contact Us</Link> | <Link to={'#'}>Web Mail</Link></p>
                <p className="contact"><span className="header-email"><IoMdMail/> vivekananadacollege.org.in</span><span className="header-phone"><BsFillTelephoneFill/> +91-9058765256</span></p>
                <div className="socials"><BsFacebook/><BsTwitter/><BsYoutube/></div>

        </div>
    </div>
  )
}

export default Header