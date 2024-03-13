import { Fragment } from "react";

import './contact.css';

import SectionHeading from './heading';

import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaPhoneAlt, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutgoingMail } from "react-icons/md";


const Contact = () => {
    
    return (
        <Fragment>
            <main className="" id="contact-section">
                <div className="contact-overlay">
                    <div className="section">
                        <div className="centered-content">                        
                            <SectionHeading heading={`Get in touch`} />   
                            <h2 className="contact-text">
                                You can visit us at our offices or use the contact form below.
                            </h2>
                            <div className="contacts">
                                <form className="contact-form">
                                    <h1 className="contact-header">
                                        Talk To Us
                                    </h1>
                                </form>
                                <div className="contact-info">
                                    <h1 className="contact-header">
                                        Contact Info
                                    </h1>
                                    <div className="contacts-list"> 
                                        <ContactInfo icon={<HiBuildingOffice2 />}>
                                            4th Floor, Kitamu House, Tubman Road, off Kimathi Street, Nairobi CBD, Kenya                            
                                        </ContactInfo>
                                        <ContactInfo icon={<FaPhoneAlt/>} >
                                            <Link to={`tel: +254 7 18 857 871`} target="_blank" >
                                                +254 718 857 871
                                            </Link>
                                        </ContactInfo>
                                        <ContactInfo icon={<MdOutgoingMail/>} >
                                            <Link to={`mailto: info@pithone.co.ke`} target="_blank" >
                                                info@pithone.co.ke
                                            </Link>
                                        </ContactInfo>
                                        <div className="contacts-socials">
                                            <ContactSocials icon={<FaSquareXTwitter/>} />
                                            <ContactSocials icon={<FaInstagramSquare/>} />
                                            <ContactSocials icon={<FaFacebookSquare/>} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>                 
                </div>
            </main>
        </Fragment>
    )
}

const ContactInfo = ({ children, icon }) => {
    
    return (
        <Fragment>
            <div className="info">
                <span className="info-icon">
                    <i>
                        {icon}
                    </i>
                </span>
                <span className="info-details">
                    {children}
                </span>
            </div>
        </Fragment>
    )
}

const ContactSocials = ({link, icon}) => {
    
    return (
        <Fragment>
            <Link to={link}>
                <i>
                    {icon}
                </i>
            </Link>
        </Fragment>
    )
}
export default Contact;