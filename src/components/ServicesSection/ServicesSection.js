import React from 'react';

import './ServicesSection.css';

const ServicesSection = () => {

    return (
        <section className='home-services'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 col-12 mx-auto">
                        <div className="home-services__heading text-center">
                            <h1>Popular <strong>Services</strong></h1>
                            <p>Find the right industry for your career</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    {/* TODO Service Card */}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;