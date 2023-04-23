import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row row row-cols-1 row-cols-sm-2 row-cols-md-4 py-2 my-2">
                        <div className="col mb-3">
                            <h5 className='d-flex align-items-center mb-2'>Work Centre Ltd</h5>
                            <p>With a focus on customer service, the best Recruiting Service out there.</p>
                        </div>
                        <div className="col mb-3">
                            <h5>Navigation</h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'><Link to='/'>Home</Link></li>
                                <li className='nav-item mb-2'><Link to='/services'>Services</Link></li>
                                <li className='nav-item mb-2'><Link to='/about'>About</Link></li>
                                <li className='nav-item mb-2'><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col mb-3">
                            <h5>Popular Services</h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'><Link>Hospitality Management</Link></li>
                                <li className='nav-item mb-2'><Link>Health Care</Link></li>
                                <li className='nav-item mb-2'><Link>Retail & Accounting</Link></li>
                                <li className='nav-item mb-2'><Link>Event Management</Link></li>
                            </ul>
                        </div>
                        <div className="col mb-3">
                            <h5>Help & Support</h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'><Link>Privacy</Link></li>
                                <li className='nav-item mb-2'><Link>Terms & Conditions</Link></li>
                                <li className='nav-item mb-2'><Link>Mail Us</Link></li>
                                <li className='nav-item mb-2'><Link>Faqs</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-md-center">
                        <div className="col-md-8">
                            <p className='mb-0 text-md-start text-center'>© 2023 WorkCentre. All rights reserved. Develop By <Link className='fw-semibold'>RockX Solutions</Link></p>
                        </div>
                        <div className="col-md-4 text-md-end text-center">
                            <ul className="footer-bottom-social">
                                <li><Link><FaFacebookSquare /></Link></li>
                                <li><Link><FaTwitterSquare /></Link></li>
                                <li><Link><FaInstagramSquare /></Link></li>
                                <li><Link><FaLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;