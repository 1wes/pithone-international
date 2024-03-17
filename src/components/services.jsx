import { Fragment } from "react";

import './services.css';

import SectionHeading from "./heading";

import dubai from '../assets/dubai.jpg';
import boardroom from '../assets/boardroom.png';
import worker from '../assets/worker.png';

const Services = () => {
    
    return (
        <Fragment>
            <main className="section" id="services-section" >
                <div className="centered-content">
                    <SectionHeading heading={`Our services`} />
                    <div className="services-cards">
                        <ServiceCards image={dubai} service={`International Travels/ Tours Advisory, Planning and Implementation`}
                        description={`Full Tourist
                        Visa Packages for Individuals, Families and Corporate Organizations. We have set up in a manner that enables us to advise our clients with what best suites their interests. We focus on every nitty-gritty of their course to make sure they enjoy their adventures which they opted us to guide them.
                        `}/>
                        <ServiceCards image={boardroom} service={`International Education Advisory, Planning and Implementation`}
                        description={`Full Study Visa
                        Packages for Undergraduate, Post-graduate and other Advanced Diploma
                        Studies Overseas. Our experience in the industry, has seen us make major steps in realizing the dreams of young talents.
                        We have acquired scholarships which are issued on merit to various students in many countries across the world.`}/>
                        <ServiceCards image={worker} service={`International Recruitment Advisory, Planning and Implementation`}
                        description={`Full Work
                        Visa Packages for Young East Africans to Job Opportunities in North America,
                        Europe and Middle East. As we consider the African growth, we are keen to play a vital role.
                        We partner with both foreign employers and recruitment agencies to secure the best opportunities for job seekers who engage us.
                        As a result this has seen quality of life improve as well as other opportunities created back at home.`}/>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

const ServiceCards = ({ image, service, description }) => {

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
                        {description}                    
                    </p>
                </div>
            </div>
        </Fragment>
    )

}
    


export default Services;