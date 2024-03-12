import { Fragment } from "react";

import './about.css';

import SectionHeading from "./heading";

import conferenceImg from '../assets/conference.png'

const About=()=>{

    return (
        <Fragment>
            <main className="about-section">
                <div className="centered-content">
                    <SectionHeading heading={`About us`} />
                    <div id="about-cards">
                        <div className="who-are-we">
                            <h3>
                                Who Are We?
                            </h3>
                            <h1>
                                Our priority is relationships, satisfaction, and results.
                            </h1>

                            <p className="about-us">
                                <strong>PITHONE INTERNATIONAL</strong> is an international travels/ tours, education and recruitment firm based in Nairobi,                                
                                Kenya, East Africa. Established in the year 2021, we have remained poised and committed towards providing                                     
                                top-notch <strong>international travel/ tours</strong>, <strong>education </strong>and <strong>recruitment </strong>services
                                 to our teeming clientele in <strong>Kenya and
                                East Africa.</strong> We prioritize relationship building, customer satisfaction and result-orientation in rendering our                                       
                                services globally.                                                            
                            </p>                            
                        </div>
                        <div className="our-stats">
                            <div className="company-image">
                                <img className="about-us-img" src={conferenceImg} />
                            </div>
                            <div className="company-stats">
                                <Stat stat={`3+`} description={`Operation Years`}/>
                                <Stat stat={`500+`} description={`Clients Served`} />
                                <Stat stat={`6`} description={`Countries`} />
                                <Stat stat={`3`} description={`Services Rendered`} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

const Stat = ({stat, description}) => {
    
    return (
        <Fragment>
            <div className="stat">
                <div className="number">
                    {stat}
                </div>
                <div className="stat-description">
                    {description}
                </div>
            </div>            
        </Fragment>
    )
}

export default About;