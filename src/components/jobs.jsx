import { Fragment } from "react";

import './jobs.css';

import SectionHeading from "./heading";
import { Button } from "./landing";

import job1 from '../assets/job1.jpeg';
import job2 from '../assets/job2.jpeg';
import job3 from '../assets/job3.jpeg';
import job4 from '../assets/job4.jpeg';
import job5 from '../assets/job5.jpeg';

import { HashLink as Jumplink } from "react-router-hash-link";

const Jobs = () => {
    
    return (
        <Fragment>
            <main className="section" id="jobs-section">
                <div className="centered-content">
                    <SectionHeading heading={`Available jobs`} />
                    <p>
                        Here are some of the available jobs sourced from various locations worldwide.
                    </p>
                    <div className="jobs-cards">
                        <Job photo={job1} />
                        <Job photo={job2} />
                        <Job photo={job3} />
                        <Job photo={job4} />
                        <Job photo={job5} />
                    </div>
                    <div className="jobs-cta">
                        <Jumplink className="jobs-link" smooth to={`#contact-section`}>
                            <Button id={`job-cta-btn`} text={`Inquire about jobs`} />                            
                        </Jumplink>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

const Job = ({photo}) => {
    
    return (
        <Fragment>
            <div className="job-card">
                <img className="job-image" src={photo} alt="job-photo" />
            </div>
        </Fragment>
    )
}
export default Jobs;