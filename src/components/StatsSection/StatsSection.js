import React from 'react';
import { FaChartBar, FaBlackTie, FaTrophy, FaUser } from 'react-icons/fa';
import './StatsSection.css';

const StatsSection = () => {
    return (
        <section className='stats-section'>
            <div className="stats-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>We Deliver <br /><strong>Excellent</strong> Services</h1>
                        </div>
                    </div>
                    <div className="row g-3 mt-5">
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="stats-item text-center">
                                <FaChartBar />
                                <h3 className="counter">7</h3>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="stats-item text-center">
                                <FaBlackTie />
                                <h3 className="counter">500</h3>
                                <p>Completed Cases</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="stats-item text-center">
                                <FaTrophy />
                                <h3 className="counter">23</h3>
                                <p>Awards</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <div className="stats-item text-center">
                                <FaUser />
                                <h3 className="counter">749</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;