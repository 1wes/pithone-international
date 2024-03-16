import { Fragment } from "react";

import './testimonial.css';

import testimonial from '../assets/testimonial.png';
import client from '../assets/client.png';

import SectionHeading from "./heading";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 10000,
        arrows:false
    }
    
    return (
        <Fragment>
            <main className="testimonials-section">
                <div className="section" id="testimonials">
                    <div className="centered-content" id="testimonials-list">
                        <SectionHeading heading={`Testimonials`} />
                        <p className="testimonial-description">
                            Hear what some of our clients have to say about us
                        </p>
                        <div className="testimonial-card">
                            <Slider {...sliderSettings} >
                                <Testimonial/>
                                <Testimonial/>
                                <Testimonial/>
                                <Testimonial/>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="testimonial-image">
                    <img className="testimonial-pic" src={testimonial} />
                </div>
            </main>
        </Fragment>
    )
}

const Testimonial = () => {
    
    return (
        <Fragment>
            <div className="testimonial">
                <div className="client-image">
                    <img src={client} />
                </div>
                <div className="client-testimony">
                    <div>
                        <span className="quotation-mark">
                            <i><FaQuoteLeft/></i>
                        </span>
                        <p className="client-quote">
                            You should always include testimonials in your copy.
                            The reader finds it easier to believe the endorsement of a fellow consumer
                            than the puffery of an anonymous copywriter.
                            You should always include testimonials in your copy. The reader finds it
                            easier to believe the endorsement of a fellow consumer than the puffery of
                            an anonymous copywriter.
                        </p>
                        <span className="quotation-mark">
                            <i><FaQuoteRight/></i>
                        </span>
                        <div className="client-name">
                            Peter Gichere
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Testimonials;