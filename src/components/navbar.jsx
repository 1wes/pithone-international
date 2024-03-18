import { Fragment } from "react";

import './navbar.css';

import pithoneLogo from '../assets/pithone.jpeg';

import { Link } from "react-router-dom";

import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import { CiMenuKebab } from "react-icons/ci";

import { HashLink as Jumplink } from "react-router-hash-link";

const Navbar = () => {
    
    return (
        <Fragment>
            <div className="full-width-navbar" id="desktop-navbar">
                <nav className="centered-content" id="navbar">
                    <div className="nav-logo-container">
                        <Logo/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
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

const MobileNav = () => {
    
    return (
        <Fragment>
            <div className="full-width-navbar" id="mobile-nav">
                <nav className="centered-content" id="mobile-navbar" >
                    <div className="nav-logo-container">
                        <Logo Id={`mobile-nav-logo`} />
                    </div>
                    <div className="kebab-menu">
                        <i>
                            <CiMenuKebab/>
                        </i>
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

const Logo = ({ Id }) => {
    
    return (
        <Fragment>
            <img className="nav-logo" id={Id} src={pithoneLogo} />            
            <span className="company-name">Pithone International</span>               
        </Fragment>
    )
}

export {
    MobileNav
}

export default Navbar;