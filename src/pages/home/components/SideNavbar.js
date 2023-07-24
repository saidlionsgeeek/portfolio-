import React from 'react'
import said from '../../../assets/images/caméra.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default function SideNavbar() {
    return (
        <nav className='side-navbar'>
            <div className='d-flex  flex-column justify-content-center  pt-1  rounded-circle align-items-center'>
                <img className='rounded-circle image-profile' width={120} height={120} src={said} alt="" />
                <h4 className='text-light pt-1'>Said Issabbane</h4>
            </div>
            <div className='d-flex mt-1 justify-content-center gap-1'>
                <div className='icon-div'>
                   <a href="http://www.twiter.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className='text-light' icon={faTwitter}   /></a> 
                </div>
                <div className='icon-div'>
                </div>
                <div className='icon-div'>
                    <FontAwesomeIcon className='text-light' icon={faInstagram} />
                </div>
                <div className='icon-div'>
                    <FontAwesomeIcon className='text-light' icon={faSkype} />
                </div>
                <div className='icon-div'>
                    <FontAwesomeIcon className='text-light' icon={faLinkedinIn} />
                </div>
            </div>
            <ul className='list-unstyled mt-3 ms-2'>
                <li  className='text-light mb-1 '><span><FontAwesomeIcon icon={faHome} /> </span>  Home</li>
                <li className='text-light mb-1 '> About</li>
                <li className='text-light mb-1 '>Resume</li>
                <li className='text-light mb-1 '>Portfolio</li>
                <li className='text-light mb-1 '>Service</li>
                <li className='text-light mb-1 '>Contact</li>
            </ul> 
            <div className=''>
            <p className='text-light'>© Copyright iPortfolio</p>
            <p className='text-light'>Designed by <span className='text-primary'>Said Issabbane</span></p>
            </div>
        </nav>
    )
}
