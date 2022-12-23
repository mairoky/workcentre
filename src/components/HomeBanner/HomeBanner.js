import React from 'react';

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
                            <h1 className='fw-bold'>The Most Reliable <span>Recruiting Service Agency</span></h1>
                            <p>Find The Best & Reliable Job Opportunity with us and Leveling up your Skill. This is the Easiest Way to Get Your New Dream Job.</p>
                            <button className='btn-general fw-semibold'>Talk to Us</button>
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