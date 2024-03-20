import { Fragment, useState } from "react";

import './services.css';

import SectionHeading from "./heading";
import { Button } from "./landing";

import dubai from '../assets/dubai.jpg';
import boardroom from '../assets/boardroom.png';
import worker from '../assets/worker.png';
import passport from '../assets/passport.png';

const Services = () => {
    
    return (
        <Fragment>
            <main className="section" id="services-section" >
                <div className="centered-content">
                    <SectionHeading heading={`Our services`} />
                    <div className="services-cards">
                        <ServiceCards image={dubai} service={`International Travels/ Tours Advisory, Planning and Implementation`}
                        description={`Full Tourist
                        Visa Packages for Individuals, Families and Corporate Organizations: We have set up in a manner that enables 
                        us to advise our clients with what best suites their interests. We focus on every nitty-gritty of their course 
                        to make sure they enjoy their adventures which they opted us to guide them.
                        `}/>
                        <ServiceCards image={boardroom} service={`International Education Advisory, Planning and Implementation`}
                        description={`Full Study Visa
                        Packages for Undergraduate, Post-graduate and other Advanced Diploma
                        Studies Overseas: Our experience in the industry, has seen us make major steps in realizing the dreams of young talents.
                        We have acquired scholarships which are issued on merit to various students in many countries across the world.`}/>
                        <ServiceCards image={worker} service={`International Recruitment Advisory, Planning and Implementation`}
                        description={`Full Work
                        Visa Packages for Young East Africans to Job Opportunities in North America,
                        Europe and Middle East: As we consider the African growth, we are keen to play a vital role.
                        We partner with both foreign employers and recruitment agencies to secure the best opportunities for job seekers who engage us.
                        As a result this has seen quality of life improve as well as other opportunities created back at home.`} />
                        <ServiceCards image={passport} service={`Kenyan Government Services`}
                            description={`We offer All Kenyan government services; Immigration(Passport and the like), DCI(Good Conduct), Ministry of 
                         Foreign Affairs(Attestation), Ministry of Lands(Rates & Boma Yangu), Asylum Seeking Documentation et.al. The offered services
                         are done legitimately in line with government procedures and at an extra cost, they are hastened. For example, a passport application
                          will be done as you are advised on which is the most suitable options in terms of the available booklets at the printing department
                          in the immigration offices. After the biometrics are captured at the desired station, the passport will take 5 working days unlike
                          the precedented time which is unknown.`} />        
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

const ServiceCards = ({ image, service, description }) => {

    const [showMore, setShowMore] = useState(false);

    return (
        <Fragment>
            <div className="service-card">
                <div className="service-image">
                    <img className="service-card-image" src={image} alt="service-image" />
                </div>
                <div className="service-card-text">
                    <h3 className="service-title">
                        {service}
                    </h3> 
                    <p className="service-description">
                        {`${showMore ? `${description}`: `${description.substring(0, 350)}...`}`}
                    </p>                    
                </div>

                <div className="read-more">
                      <Button text={showMore?'Show Less': 'Show More'} onClick={()=>{setShowMore(!showMore)}}  id={`more-cta`} />                    
                </div>  
                
            </div>
        </Fragment>
    )

}
    


export default Services;