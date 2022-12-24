import React from 'react';
import { Link } from 'react-router-dom';
import WorkingImage from '../../assets/images/working.png';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-5 col-md-5 col-12">
                        <img className="d-block img-fluid h-100" src={WorkingImage} alt="WorkCentreImage" />
                    </div>
                    <div className="col-lg-7 col-md-7 col-12 about-content d-flex align-items-lg-center">
                        <div className="p-lg-5 p-md-4 p-3">
                            <h1>Some Fine <br />Words <strong>About Us</strong></h1>
                            <h4>Finding The Jobs That You Have Been Dreaming</h4>
                            <p className='mb-4'>We started off as a small 2 men army offering dedicated plumbing solutions in the neighborhood. This then expanded into a larger team offering a wider range of services at affordable prices. Whether it’s repair or replacement, we make sure it’s done well.</p>
                            <div className="row">
                                <div className="col-lg-4 col-6">
                                    <h3 className='fw-semibold'>1.2k+</h3>
                                    <p>Happy Users</p>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <h3 className='fw-semibold'>100+</h3>
                                    <p>Affiliated Company</p>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <h3 className='fw-semibold'>500+</h3>
                                    <p>Job Offers</p>
                                </div>
                            </div>
                            <div className="more-btn mt-1">
                                <Link to='/about' className="btn btn-general fw-semibold">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;