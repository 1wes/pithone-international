import React, { Fragment } from "react";

import pithoneLogo from '../assets/pithone.jpeg';

import './counter.css';

import { Link } from "react-router-dom";

import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';

const ComingSoon = () => {
    
    return (
        <Fragment>
            <main className="coming-soon">
                <div className="coming-soon-content">
                    <div className="centered-content">
                        <div className="logo">                            
                            <img src={pithoneLogo} height={`auto`} width={`6%`} />                            
                        </div>                        
                        <h1 className="punchline">                            
                            OUR WEBSITE IS COMING SOON  !!                       
                        </h1>     
                        <p className="tagline">
                            We Connect Job Seekers With Potential Employers Abroad
                        </p>
                        <div className="counter-cards">
                            <CounterDownCard duration={`21`} durationType={`days`}/>
                            <CounterDownCard duration={`23`} durationType={`hours`}/>
                            <CounterDownCard duration={`58`} durationType={`minutes`}/>
                            <CounterDownCard duration={`59`} durationType={`seconds`}/>
                        </div>
                        <div className="socials">
                            <p className="socials-text">Follow us for updates</p>
                            <div className="socials-list">
                                <Social socialsIcon={<FaXTwitter/>} />
                                <Social socialsIcon={<FaInstagram/>}/>
                                <Social socialsIcon={<FaFacebookF/>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

const CounterDownCard = ({duration, durationType}) => {
    
    return (
        <Fragment>
            <div className="counterdown-card">
                <div className="duration">
                    {duration}
                </div>
                <div className="duration-type">
                    {durationType}
                </div>
            </div>
        </Fragment>
    )
}

const Social = ({socialsLink, socialsIcon}) => {
    
    return (
        <Fragment>
            <div className="social">
                <Link to={socialsLink} >
                    <i>
                        {socialsIcon}
                    </i>
                </Link>
            </div>
        </Fragment>
    )
}
export default ComingSoon;