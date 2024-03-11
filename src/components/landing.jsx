import { Fragment } from "react";

import './landing.css';

import Navbar from "./navbar";

const LandingPage = () => {
    
    return (
        <Fragment>
            <main className="landing-page">
                <Navbar/>
            </main>
        </Fragment>
    )
}

export default LandingPage;