import React from 'react';
import { Link } from 'react-router-dom';

import HomeBannerImage from '../../assets/images/home/img-banner.png';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <section className='home-banner'>
            <div className='container'>
                <div className="row g-5 align-items-center">
                    <div className="col-md-7 col-12">
                        <div className="home-banner-content">
                            <p className='mb-0 p-2 d-inline-block home-p1 rounded'>Find your dream jobs with Work Centre Ltd.</p>
                            <h1 className='fw-bold'>The Most Reliable <span>Recruiting Service</span> Agency</h1>
                            <p>Find The Best & Reliable Job Opportunity with us. This is the Easiest Way to Get Your New Dream Job.</p>
                            <Link to='/contact'>
                                <button className='btn-general fw-semibold'>Talk to Us</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="banner-img">
                            <img className='img-fluid' src={HomeBannerImage} alt="Work Centre" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;