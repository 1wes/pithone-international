import { Fragment } from "react";

import './landing.css';

import Navbar from "./navbar";
import { MobileNav } from "./navbar";

import { HashLink as Jumplink } from "react-router-hash-link";

const LandingPage = () => {
    
    return (
        <Fragment>
            <main className="landing-page">
                <Navbar />
                <MobileNav/>
                <div className="centered-content" id="hero-section">
                    <h1 className="hero-punchline">
                        Embark on a <span className="important-text">Global</span> Journey.
                    </h1>
                    <p className="hero-tagline">
                        We Are your Gateway to Exceptional <span className="important-text">Travel/Tours</span> , <span className="important-text">
                            Education</span> , and <span className="important-text"> Career</span> Opportunities.
                    </p>
                </div>
                <div className="centered-content" id="hero-cta">
                    <Jumplink smooth to={`#about-section`} >
                        <Button type={`button`} text={`About us`}  className={`primary-btn`} />
                    </Jumplink>
                    <Jumplink smooth to={`#services-section`}>
                        <Button type={`button`} text={`What we do`} className={`secondary-btn`} />
                    </Jumplink>
                </div>
            </main>
        </Fragment>
    )
}

const Button = ({ className, text, onClick, id, type }) => {
    
    return (
        <button type={type} className={className} onClick={onClick} id={id} >
            {text}
        </button>
    )
}

export {
    Button
}

export default LandingPage;