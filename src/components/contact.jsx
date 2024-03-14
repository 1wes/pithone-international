import { Fragment, useState } from "react";

import './contact.css';

import SectionHeading from './heading';

import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaPhoneAlt, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutgoingMail } from "react-icons/md";
import { Button } from "./landing";

const Contact = () => {

    const[form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const { name, email, message } = form;

    const handleSubmit = (e) => {
        
        e.preventDefault();

    }
    
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
                                <form className="contact-form" onSubmit={handleSubmit} >
                                    <h1 className="contact-header">
                                        Talk To Us
                                    </h1>
                                    
                                    <div className="fields">
                                        <div className="inline-fields">
                                            <div className="input">
                                                <label>
                                                    Name
                                                </label>    
                                                <input type="text" value={name} onChange={(e)=>{setForm({...form, name:e.target.value})}} required/>
                                            </div>
                                            <div className="input">
                                                <label>
                                                    Email
                                                </label>
                                                <input type="email" value={email} onChange={(e)=>{setForm({...form, email:e.target.value})}} required/> 
                                            </div>
                                        </div>
                                        <div className="input">
                                            <label htmlFor="">
                                                Your Message
                                            </label>
                                            <textarea value={message} onChange={(e)=>{setForm({...form, message:e.target.value})}} required>

                                            </textarea>
                                        </div>

                                        <Button type={`submit`} className={`primary-btn`} id={`submit-btn`} text={`Send Message`} />
                                    </div>
                                </form>
                                <div className="contact-info">
                                    <h1 className="contact-header">
                                        Contact Info
                                    </h1>
                                    <div className="contacts-list"> 
                                        <ContactInfo icon={<HiBuildingOffice2 />}>
                                            4<sup>th</sup> Floor, Kitamu House, Tubman Road, off Kimathi Street, Nairobi CBD, Kenya                            
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