import React from 'react';
import { Link } from 'react-router-dom';

import './ContactCta.css';

const ContactCta = () => {
    return (
        <section className='contact-cta'>
            <div className="container">
                <div className="row g-3 align-items-lg-center">
                    <div className="col-md-5 col-12 text-center">
                        <Link to='/contact' className="btn btn-general fw-semibold">Get In Touch</Link>
                    </div>
                    <div className="col-md-7 col-12 text-center">
                        <div className="contact-section-heading">
                            <p className='mb-0'>Let's Talk</p>
                            <h1>About Your<br /><strong>Future</strong> Opportunities</h1>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactCta;