import React from 'react';
import './Banner.css';

const Banner = ({ heading, shortDes }) => {
    return (
        <section className='banner'>
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-md-7 col-12 mx-auto">
                        <div className="banner-content text-center p-3">
                            <h1 className='fw-bold'>{heading}</h1>
                            <p className='mb-2'>{shortDes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;