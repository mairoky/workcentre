import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = () => {
    return (
        <section className='service'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="service-image">
                            <img src={image} alt="Service Name" className='d-block img-fluid rounded' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-content">
                            <h2>Service Name</h2>
                            <ul className="service-list">
                                <li className="service-item">Service One</li>
                                <li className="service-item">Service Two</li>
                                <li className="service-item">Service Three</li>
                                <li className="service-item">Service Four</li>
                            </ul>
                            <Link to='/apply' className='btn btn-general fw-semibold'>Submit CV</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;