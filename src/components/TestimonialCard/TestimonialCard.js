import React from 'react';

import { FaStar } from 'react-icons/fa';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
    const { author_name, author_image, author_designation } = testimonial;
    return (
        <div className="testimonial-item">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                    <h3>Excellent Support</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                    <div className="stars text-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Ratione aspernatur soluta nobis distinctio illo omnis! Cumque, repellendus.</p>
            <div className="author">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-3 col-sm-3 col-3 text-center">
                        <img src={author_image} alt="author" className="img-fluid rounded-circle" />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                        <div className="author-name-des">
                            <p className='m-0'>{author_name}</p>
                            <p className='m-0'>{author_designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;