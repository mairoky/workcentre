import React from 'react';
import { Link } from 'react-router-dom';

import './ContactCta.css';

const ContactCta = () => {
    return (
        <section className='contact-cta'>
            <div className="container">
                <div className="row g-5 align-items-lg-center">
                    <div className="col-md-7 col-12">
                        <div className="contact-section-heading">
                            <p className='mb-0'>Let's Talk</p>
                            <h1>About Our<br /><strong>Future</strong> Prospect</h1>
                        </div>
                    </div>
                    <div className="col-md-5 col-12 text-center">
                        <Link to='/contact' className="btn btn-general fw-semibold">Get In Touch</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCta;