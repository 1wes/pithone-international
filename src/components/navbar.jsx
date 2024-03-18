import { Fragment, useState } from "react";

import './navbar.css';

import pithoneLogo from '../assets/pithone.jpeg';

import { Link } from "react-router-dom";

import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

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

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        
        setShowMenu(!showMenu);
    }
    
    return (
        <Fragment>
            <div className="full-width-navbar" id="mobile-nav">
                <nav className="centered-content" id="mobile-navbar" >
                    <div className="nav-logo-container">
                        <Logo Id={`mobile-nav-logo`} />
                    </div>
                    <div className="kebab-menu" >
                        <i onClick={toggleMenu}>
                            {showMenu?<IoClose/>:<CiMenuKebab/>}
                        </i>
                        <div className={showMenu?"show-menu":"menu"}>
                            <div className="mobile-nav-menu">
                                <div className="menu-items">
                                    <MobileJumpLink to={`#about-section`} menuItem={`About`} callbackFunction={toggleMenu}  />
                                    <MobileJumpLink  to={`#services-section`} menuItem={`Services`} callbackFunction={toggleMenu} />                             
                                    <MobileJumpLink to={`#contact-section`} menuItem={`Contacts`} callbackFunction={toggleMenu} />                              
                                </div>    
                                <div className="nav-socials" id="mobile-nav-socials">
                                    <NavSocials navSocialIcon={<FaXTwitter/>} callbackFunction={toggleMenu} />
                                    <NavSocials navSocialIcon={<FaInstagram/>} callbackFunction={toggleMenu} />
                                    <NavSocials navSocialIcon={<FaFacebookF/>} callbackFunction={toggleMenu} />
                                </div>
                            </div>                            
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

const NavSocials = ({navSocialLink, navSocialIcon, callbackFunction}) => {
    
    return (
        <div onClick={callbackFunction}>
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

const MobileJumpLink = ({to, menuItem, callbackFunction}) => {
    
    return (
        <Fragment>
            <Jumplink smooth to={to} onClick={callbackFunction} >                   
                <div>{ menuItem }</div>                               
            </Jumplink>            
        </Fragment>
    )
}

export {
    MobileNav
}

export default Navbar;