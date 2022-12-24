import React from 'react';
import Slider from 'react-slick';

import Author1 from '../../assets/images/testimonial/client-1.jpg';
import Author2 from '../../assets/images/testimonial/client-2.jpg';
import Author3 from '../../assets/images/testimonial/client-3.jpg';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

import './TestimonialSection.css';

const TestimonialSection = () => {
    // Testimonial Slider Settings
    const sliderSettings = {
        className: "testimonial-slider",
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear',
        pauseOnHover: true,
        swipeToSlide: true,
        centerPadding: '0px',
        adaptiveHeight: true,
    };

    const testimonials = [
        {
            id: 1,
            author_name: 'David Wiley',
            author_image: `${Author1}`,
            author_designation: 'Admin Support'
        },
        {
            id: 2,
            author_name: 'Mark Smith',
            author_image: `${Author2}`,
            author_designation: 'HR Manager'
        },
        {
            id: 3,
            author_name: 'Liya Thomas',
            author_image: `${Author3}`,
            author_designation: 'Event Planner'
        }
    ];

    return (
        <section className='testimonial-section'>
            <div className="container">
                <div className="row g-5 align-items-lg-center">
                    <div className="col-md-4 col-12">
                        <h1>What Our <br /><strong>Customers</strong> Say</h1>
                    </div>
                    <div className="col-md-8 col-12">
                        <div className="testimonial-slider">
                            <Slider {...sliderSettings}>
                                {
                                    testimonials.map((testimonial) => <TestimonialCard
                                        key={testimonial?.id}
                                        testimonial={testimonial} />)
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;