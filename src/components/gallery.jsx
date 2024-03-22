import { Fragment } from "react"

import './gallery.css';

import SectionHeading from "./heading";

import clearPithone from '../assets/pithone-bg.png';
import jkia from '../assets/jkia.png';
import pithone from '../assets/contact.png';
import worker from '../assets/worker.png';
import passport from '../assets/passapp.png';
import edAdvisory from '../assets/conference.png';
import qatar from '../assets/qatar.png';

const Extra = () => {
    
    return (
        <Fragment>
            <main className="section" id="gallery-section"> 
                <div className="centered-content" id="gallery-content" >
                    <SectionHeading heading={`Gallery`} />
                    <div className="gallery-images">
                        <ImageCard image={jkia} galleryHeader={`Leaving Kenya`} galleryDescription={`International travel`} />
                        <ImageCard image={pithone} galleryHeader={`Our Premises`} galleryDescription={`Our open offices for in-person consultation `} />
                        <ImageCard image={worker} galleryHeader={`International Workers`} galleryDescription={`Kenyan workers leveraging opportunities abroad`} />
                        <ImageCard image={passport} galleryHeader={`Passport Procurement`} galleryDescription={`Legitimate passport application process`} />
                        <ImageCard image={edAdvisory} galleryHeader={`Education Advisory`} galleryDescription={`International education and scholarships advisory`} />
                        <ImageCard image={qatar} galleryHeader={`International Job Opportunities`} galleryDescription={`Jobs sourced from across the world`} />
                    </div>
                    <div>
                        <img className="clear-image" src={clearPithone} />                        
                    </div>
                </div>  
            </main>
        </Fragment>
    )
}

const ImageCard = ({ image, galleryHeader, galleryDescription }) => {
    
    return (
        <div className="gallery-image">
            <img src={image} />
            <div className="image-overlay">
                <h2>
                    {galleryHeader}
                </h2>
                <hr />
                <p>
                    {galleryDescription}
                </p>
            </div>
        </div>
    )
}
export default Extra;