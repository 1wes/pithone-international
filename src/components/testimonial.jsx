import { Fragment } from "react";

import './testimonial.css';

import testimonial from '../assets/testimonial.png';
import client from '../assets/client.png';
import client1 from '../assets/student.png';
import client2 from '../assets/man.png';
import client3 from '../assets/woman.png';

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
                                <Testimonial image={client} quote={`Exceptional service! 
                                    Pithone International provided us with comprehensive tourist
                                    visa packages tailored to our needs. Their meticulous attention
                                    to detail ensured that our journey was seamless and enjoyable.
                                    Highly recommend for individuals, families, and corporate groups
                                    seeking expert guidance on their travel adventures.`} name={`J. Mwangi.`} />
                                <Testimonial image={client1} quote={`Pithone International's commitment to securing
                                    scholarships for aspiring scholars is commendable. With their extensive experience
                                    in the industry, they have facilitated countless undergraduate, post-graduate,
                                    and advanced diploma students in pursuing their dreams abroad. Their expertise
                                    in identifying and obtaining merit-based scholarships across various countries
                                    underscores their dedication to advancing education and empowering young talents
                                    worldwide.`} name={`Maxine Akinyi.`} />
                                <Testimonial image={client2} quote={`Pithone International played an instrumental role in my journey 
                                    to secure a job abroad. Their personalized guidance and unwavering support ensured that
                                    I navigated the complex process with ease. From resume optimization to interview preparation,
                                    their expert advice and resources were invaluable. Thanks to Pithone, I am now thriving in
                                    my career overseas, and I highly recommend their services to anyone seeking employment
                                    opportunities abroad.`} name={`Andrew Chuma.`} />
                                <Testimonial image={client3} quote={`Pithone International went above and beyond to assist me in securing 
                                    essential government services, including obtaining a passport. Their dedicated team provided
                                    step-by-step guidance, ensuring a smooth and hassle-free process. With their expertise and
                                    attention to detail, I was able to navigate bureaucratic procedures with ease and confidence.
                                    I am immensely grateful to Pithone for their exceptional service and unwavering support in
                                    achieving my documentation needs`} name={`K. Chelagat.`} />
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

const Testimonial = ({ image, quote, name }) => {
    
    return (
        <Fragment>
            <div className="testimonial">
                <div className="client-image">
                    <img src={image} />
                </div>
                <div className="client-testimony">
                    <div>
                        <span className="quotation-mark">
                            <i><FaQuoteLeft/></i>
                        </span>
                        <p className="client-quote">
                            {quote}                            
                        </p>
                        <span className="quotation-mark">
                            <i><FaQuoteRight/></i>
                        </span>
                        <div className="client-name">
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Testimonials;