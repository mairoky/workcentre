import React from 'react';
import { FaMobileAlt, FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    {/* left side */}
                    <div className="col-lg-6">
                        <div className="contact-left">
                            <h2>Get<br />In <strong>Touch</strong></h2>
                            <p>Need to book an appointment or an emergency help? Get in touch with us now and our representative will help you soon.</p>
                            <div className="contact-info my-5">
                                <h4>Let's Talk</h4>
                                <p className='mb-0'>
                                    <HiOutlineMail /> info@workcentreltd.co.uk
                                </p>
                                <p className='mb-0'>
                                    <FaMobileAlt /> 07438 349815
                                </p>
                            </div>
                            <div className="office-address mb-5">
                                <h4>Visit Us</h4>
                                <p className='mb-0'>73 green filed road , first floor, E1 1EJ</p>
                            </div>
                            <ul className="social-list p-0 mb-5">
                                <li><Link><FaFacebookSquare /></Link></li>
                                <li><Link><FaTwitterSquare /></Link></li>
                                <li><Link><FaInstagramSquare /></Link></li>
                                <li><Link><FaLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="col-lg-6">
                        <div className="contact-right">
                            <form>
                                <h3 className='fw-semibold'>Send Message</h3>
                                <p className='mb-4'>Get in touch with us now and book your appointment or get a free consultation for the issue you are facing.</p>
                                <div className="row g-3">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input type="text" className="form-control" id="name" placeholder="Name" aria-label="Name" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input type="email" className="form-control" id="email" placeholder="Email" aria-label="Email" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input type="text" className="form-control" id="phone" placeholder="Phone No" aria-label="Phone" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <input type="subject" className="form-control" id="subject" placeholder="Subject" aria-label="Subject" size={30} />
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control" id="message" name="message" placeholder="Message" defaultValue={""} />
                                    </div>
                                </div>
                                <button
                                    className='btn btn-general contact-btn' type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;