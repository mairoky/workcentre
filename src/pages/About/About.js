import React from 'react';
import Banner from '../../components/Banner/Banner';
import TeamSection from '../../components/TeamSection/TeamSection';
import AboutImage from '../../assets/images/about/about-work.jpg';
import WorkValues from '../../assets/images/about/work-values.jpg';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import './About.css';

const About = () => {
    const heading = "About Us";
    const shortDes = "We Solve men power Problems with Most Efficiency.";
    return (
        <div>
            <Banner heading={heading} shortDes={shortDes} />
            <section className='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="about-left">
                                <h2>A Short<br /><strong>Story About Us</strong></h2>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6">
                            <div className="about-right">
                                <p>We started off as a small 2 men army offering dedicated plumbing solutions in the neighborhood. This then expanded into a larger team offering a wider range of services at affordable prices. Whether it’s repair or replacement, we make sure it’s done well.</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt odio ad alias saepe error tempore, officia architecto eum, sint fuga placeat temporibus numquam.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6 d-flex align-items-lg-center">
                            <div className="p-3">
                                <h2 className='fw-semibold text-center'>Our Values</h2>
                                <div className="values">
                                    <p><span><FaArrowAltCircleRight /></span> Consider honesty as the key to a business’ trustworthiness and integrity.</p>
                                    <p><span><FaArrowAltCircleRight /></span> Always do the right thing to solve the customer’s problem.</p>
                                    <p><span><FaArrowAltCircleRight /> Perform all work with the highest level of excellence in mind.</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="values-image">
                                <img src={WorkValues} alt="Work Centre" className='d-block img-fluid rounded' />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className='work-mission'>
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="about-image">
                                <img src={AboutImage} alt="work centre" className='d-block img-fluid rounded' />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-lg-center">
                            <div className="p-4">
                                <h2 className='fw-semibold'>Our Mission</h2>
                                <p>Utilizing in-depth market knowledge, and extensive network of specialist candidates, Impellers specialist teams provide expert recruitment services for permanent and contract roles. The breadth of their business is impressive to say the least. They help find fulfilling roles for doctors, lawyers, accountants, tech professionals, nurses, teachers, scientists, receptionists, chefs, security guards – the list goes on and on! They manage the hiring process from start to finish for their clients, delivering performance improvements and cost savings along the way. This enables their clients to focus on the demands of their core business.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TeamSection />
        </div >
    );
};

export default About;