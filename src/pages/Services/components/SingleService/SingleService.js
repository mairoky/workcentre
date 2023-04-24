import React from 'react';
import './SingleService.css';

const SingleService = ({ service }) => {
    const { id, service_name, service_image } = service;
    return (
        <div className='col-lg-6 col-md-6 col-12'>
            <div className="single-service-card rounded">
                <img className='d-block img-fluid rounded' src={service_image} alt="work centre ltd" />
                <div className="single-service-info">
                    <p className='m-0'>{service_name}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;