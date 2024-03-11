import { Fragment, useState, useEffect, useCallback } from "react";

import pithoneLogo from '../assets/pithone.jpeg';

import './counter.css';

import { Link } from "react-router-dom";

import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';

const ComingSoon = () => {

    const calculateTimeLeft = useCallback(() => {
        
        const timeDifference = +new Date('2024-03-25') - +new Date();

        let timeLeft = {};

        if (timeDifference > 0) {
            
            timeLeft = {
                seconds: Math.floor((timeDifference / 1000) % 60),
                minutes: Math.floor((timeDifference / 1000 / 60) % 60),
                hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
                days: Math.floor(timeDifference / (1000 * 60 * 60 * 24))
            }
        }

        return timeLeft;
    }, []);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {

        const runIntervalEverySecond = setInterval(() => {
            setTimeLeft(calculateTimeLeft);
        }, 1000);

        return () => {
            clearInterval(runIntervalEverySecond);
        }
        
    }, [calculateTimeLeft]);

    // format the time to have two significant digits
    const formatNumbers = digit => String(digit).padStart(2, '0');
    
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
                            We are an international travel/tours, education, and recruitment firm based in Nairobi.
                        </p>
                        <div className="counter-cards">
                            <CounterDownCard duration={formatNumbers(timeLeft.days)} durationType={`days`}/>
                            <CounterDownCard duration={formatNumbers(timeLeft.hours)} durationType={`hours`}/>
                            <CounterDownCard duration={formatNumbers(timeLeft.minutes)} durationType={`minutes`}/>
                            <CounterDownCard duration={formatNumbers(timeLeft.seconds)} durationType={`seconds`}/>
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
                <Link to={socialsLink} tabIndex={0} target="_blank" >
                    <i>
                        {socialsIcon}
                    </i>
                </Link>
            </div>
        </Fragment>
    )
}


export default ComingSoon;