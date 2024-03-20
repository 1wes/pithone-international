import { Fragment } from "react";

import './about.css';

import SectionHeading from "./heading";

import conferenceImg from '../assets/conference.png'

const About=()=>{

    return (
        <Fragment>
            <main className="section" id="about-section">
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
                                <Stat stat={`6+`} description={`Countries`} />
                                <Stat stat={`3+`} description={`Services Rendered`} />
                            </div>
                        </div>
                    </div>
                    <div className="vision-mission">
                        <div className="vision">
                            <VisionMissionCard heading={`Our Vision.`} goal={`
                            To Become a leading international travels and tours, education and recruitment service provider in Kenya and East
                            Africa.`} />
                        </div>

                        <div className="mission">
                            <VisionMissionCard heading={`Our Mission.`} goal={`
                            To build formidable international partnerships and networks that will provide young vibrant Africans viable
                            opportunities to actualize their dreams and goals anywhere in the world.`} />
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

const VisionMissionCard = ({heading, goal}) => {
    
    return (
        <Fragment>
            <div className="statement">
                <h1 className="goal-header">
                    {heading}
                </h1>
                <p className="goal-statement">
                    {goal}                  
                </p>
            </div>
        </Fragment>
    )
}

export default About;