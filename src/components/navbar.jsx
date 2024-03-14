import { Fragment } from "react";

import './navbar.css';

import pithoneLogo from '../assets/pithone.jpeg';

import { Link } from "react-router-dom";

import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';

import { HashLink as Jumplink } from "react-router-hash-link";

const Navbar = () => {
    
    return (
        <Fragment>
            <div className="full-width-navbar">
                <nav className="centered-content" id="navbar">
                    <div className="nav-logo-container">
                        <img className="nav-logo" src={pithoneLogo} />
                        <span className="company-name">Pithone International</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                    </div>
                    <div className="nav-menu">
                        <Jumplink smooth to={`#about-section`}>
                            <div>About</div>                            
                        </Jumplink>
                        <Jumplink smooth to={`#services-section`}>
                            <div>Services</div>                            
                        </Jumplink>
                        <Jumplink smooth to={`#contact-section`} >
                            <div>Contacts</div>                            
                        </Jumplink>
                    </div>
                    <div className="nav-socials">
                        <NavSocials navSocialIcon={<FaXTwitter/>} />
                        <NavSocials navSocialIcon={<FaFacebookF/>} />
                        <NavSocials navSocialIcon={<FaInstagram/>} />
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

const NavSocials = ({navSocialLink, navSocialIcon}) => {
    
    return (
        <div>
            <Link to={navSocialLink}>
                <i>
                    {navSocialIcon}
                </i>
            </Link>
        </div>
    )
}
export default Navbar;