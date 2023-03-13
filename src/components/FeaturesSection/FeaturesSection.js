import React from 'react';

import { FaArrowRight, FaMagic, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FeaturesImage from '../../assets/images/features.png';
import './FeaturesSection.css';

const FeaturesSection = () => {
    return (
        <section className='features-section'>
            <div className="container">
                <div className="row g-3 align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="features-content">
                            <h1>Why <strong>Choose</strong> Us</h1>
                            <h4>Giving The Job Opportunity That Fits With Your Profile.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, excepturi cum possimus voluptatum eaque omnis.</p>
                            <div className='row g-3'>
                                <div className="col-md-6 col-12">
                                    <div className="feature-item">
                                        <div className="feature-icon mb-2">
                                            <FaLeaf />
                                        </div>
                                        <h4>Best Service</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eum. Ducimus dolores veniam quam tempore.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="feature-item">
                                        <div className="feature-icon mb-2">
                                            <FaMagic />
                                        </div>
                                        <h4>Expert Team</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, possimus sint esse velit voluptas reiciendis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-btn mt-3">
                                <Link to='/contact' className='btn btn-general fw-semibold me-3'>Start Consultation</Link>
                                <Link to='application-form' className='btn btn-outline-dark fw-semibold'>Apply Now <FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="features-image text-md-center">
                            <img className='img-fluid rounded' src={FeaturesImage} alt="work centre" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;