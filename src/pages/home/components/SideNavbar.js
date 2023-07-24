import React from 'react'
import said from '../../../assets/images/caméra.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFile, faHome, faNotdef, faRectangleList, faRectangleTimes, faServer, faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function SideNavbar() {
    return (
        <header className='head'>
            <nav className='side-navbar  nav-menu '>
                <div className='d-flex  flex-column justify-content-center  pt-1  rounded-circle align-items-center'>
                    <img className='rounded-circle image-profile' width={120} height={120} src={said} alt="" />
                    <h4 className='text-light pt-1'>Said Issabbane</h4>
                </div>
                <div className='d-flex mt-1 justify-content-center gap-1'>
                    <div className='icon-div'>
                        <a href="http://www.twiter.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className='text-light' icon={faTwitter} /></a>
                    </div>
                    <div className='icon-div'>
                        <a href="http://www.twiter.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebookF} className='text-light' /></a>
                    </div>
                    <div className='icon-div'>
                        <a href="http://www.twiter.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className='text-light' icon={faInstagram} /></a>
                    </div>
                    <div className='icon-div'>
                        <a href="http://www.twiter.com" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon className='text-light' icon={faSkype} /></a>
                    </div>
                    <div className='icon-div'>
                        <a href="http://www.twiter.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className='text-light' icon={faLinkedinIn} /></a>
                    </div>
                </div>
                <ul className='list-unstyled mt-3 ms-2 '>
                    <li className=''> <a href="#home" className='text-link mb-1  nav-link active'><span ><FontAwesomeIcon className='icon-nav' icon={faHome} /> </span> &nbsp; Home</a></li>
                    <li className=''> <a href="#about" className='text-link mb-1  nav-link '><span ><FontAwesomeIcon className='icon-nav' icon={faUser} /> </span>&nbsp; About</a> </li>
                    <li className=''> <a href="#resume" className='text-link mb-1  nav-link'><span ><FontAwesomeIcon className='icon-nav' icon={faFile} /> </span> &nbsp; Resume</a> </li>
                    <li className=''> <a href="#portfolio" className='text-link mb-1  nav-link'><span ><FontAwesomeIcon className='icon-nav' icon={faRectangleList} /> </span>&nbsp; Portfolio</a> </li>
                    <li className=''> <a href="#service" className='text-link mb-1  nav-link'><span ><FontAwesomeIcon className='icon-nav' icon={faServer} /> </span> &nbsp; Service</a> </li>
                    <li className=''> <a href="#contact" className='text-link mb-1  nav-link'><span ><FontAwesomeIcon className='icon-nav' icon={faEnvelope} /> </span> &nbsp; Contact</a> </li>
                </ul>
                <div className='position-absolute  bottom-0 start-50 translate-middle-x w-75'>
                    <p className='text-light'>© Copyright lionesgeek</p>
                    <p className='text-light'>Designed by <span className='text-primary'>Said Issabbane</span></p>
                </div>
            </nav>
        </header>
    )
}
