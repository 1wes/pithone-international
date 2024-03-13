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
                        Visa Packages for Individuals, Families and Corporate Organizations`}/>
                        <ServiceCards image={boardroom} service={`International Education Advisory, Planning and Implementation`}
                        description={`Full Study Visa
                        Packages for Undergraduate, Post-graduate and other Advanced Diploma
                        Studies Overseas`}/>
                        <ServiceCards image={worker} service={`International Recruitment Advisory, Planning and Implementation`}
                        description={`Full Work
                        Visa Packages for Young East Africans to Job Opportunities in North America,
                        Europe and Middle East.`}/>
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
                    <img className="service-card-image" src={image} />
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