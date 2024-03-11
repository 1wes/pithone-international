import { Fragment } from "react";

import './navbar.css';

import pithoneLogo from '../assets/pithone.jpeg';

import { Link } from "react-router-dom";

import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';

const Navbar = () => {
    
    return (
        <Fragment>
            <nav className="centered-content" id="navbar">
                <div className="nav-logo-container">
                    <img className="nav-logo" src={pithoneLogo} />
                    <span className="company-name">Pithone International</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                </div>
                <div className="nav-menu">
                    <div>About</div>
                    <div>Services</div>
                    <div>Clients</div>
                    <div>Contacts</div>
                </div>
                <div className="nav-socials">
                    <NavSocials navSocialIcon={<FaXTwitter/>} />
                    <NavSocials navSocialIcon={<FaFacebookF/>} />
                    <NavSocials navSocialIcon={<FaInstagram/>} />
                </div>
            </nav>
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