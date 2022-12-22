import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Team1 from '../../assets/images/team/team-1.jpg';
import Team2 from '../../assets/images/team/team-2.jpg';
import Team3 from '../../assets/images/team/team-3.jpg';
import Team4 from '../../assets/images/team/team-4.jpg';
import Team5 from '../../assets/images/team/team-5.jpg';
import Team6 from '../../assets/images/team/team-6.jpg';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './TeamSection.css';


const TeamSection = () => {

    const sliderSettings = {
        className: "team-slider",
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear',
        pauseOnHover: true,
        swipeToSlide: true,
        centerPadding: '0px',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className='team'>
            <div className="container">
                <div className="row">
                    {/* left side */}
                    <div className="col-md-6">
                        <div className="team-left">
                            <h2>Meet Our<br /><strong>Talented</strong> Team</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Temporibus repudiandae fugit voluptatem reprehenderit eaque ipsam quidem, laudantium consectetur ab delectus.</p>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="col-md-6">
                        <div className="team-members">
                            <Slider {...sliderSettings}>
                                {/* member 01 */}
                                <div className="team-member">
                                    <img src={Team1} alt="team member" className='img-fluid rounded' />
                                    <div className="team-member-overlay rounded">
                                        <div className="team-member-info text-center">
                                            <h4 className='m-0'>Lorem Allay</h4>
                                            <p>CEO</p>
                                            <ul className="social-list p-0">
                                                {/* TODO Add Link */}
                                                <li><Link to='#'><FaFacebook /></Link></li>
                                                <li><Link to='#'><FaTwitter /></Link></li>
                                                <li><Link to='#'><FaLinkedin /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* member 02 */}
                                <div className="team-member">
                                    <img src={Team2} alt="team member" className='img-fluid rounded' />
                                    <div className="team-member-overlay rounded">
                                        <div className="team-member-info text-center">
                                            <h4 className='m-0'>Lorem Allay</h4>
                                            <p>CEO</p>
                                            <ul className="social-list p-0">
                                                {/* TODO Add Link */}
                                                <li><Link to='#'><FaFacebook /></Link></li>
                                                <li><Link to='#'><FaTwitter /></Link></li>
                                                <li><Link to='#'><FaLinkedin /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* member 03 */}
                                <div className="team-member">
                                    <img src={Team3} alt="team member" className='img-fluid rounded' />
                                    <div className="team-member-overlay rounded">
                                        <div className="team-member-info text-center">
                                            <h4 className='m-0'>Lorem Allay</h4>
                                            <p>CEO</p>
                                            <ul className="social-list p-0">
                                                {/* TODO Add Link */}
                                                <li><Link to='#'><FaFacebook /></Link></li>
                                                <li><Link to='#'><FaTwitter /></Link></li>
                                                <li><Link to='#'><FaLinkedin /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* member 04 */}
                                <div className="team-member">
                                    <img src={Team4} alt="team member" className='img-fluid rounded' />
                                    <div className="team-member-overlay rounded">
                                        <div className="team-member-info text-center">
                                            <h4 className='m-0'>Lorem Allay</h4>
                                            <p>CEO</p>
                                            <ul className="social-list p-0">
                                                {/* TODO Add Link */}
                                                <li><Link to='#'><FaFacebook /></Link></li>
                                                <li><Link to='#'><FaTwitter /></Link></li>
                                                <li><Link to='#'><FaLinkedin /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* member 05 */}
                                <div className="team-member">
                                    <img src={Team5} alt="team member" className='img-fluid rounded' />
                                    <div className="team-member-overlay rounded">
                                        <div className="team-member-info text-center">
                                            <h4 className='m-0'>Lorem Allay</h4>
                                            <p>CEO</p>
                                            <ul className="social-list p-0">
                                                {/* TODO Add Link */}
                                                <li><Link to='#'><FaFacebook /></Link></li>
                                                <li><Link to='#'><FaTwitter /></Link></li>
                                                <li><Link to='#'><FaLinkedin /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* member 06 */}
                                <div className="team-member">
                                    <img src={Team6} alt="team member" className='img-fluid rounded' />
                                    <div className="team-member-overlay rounded">
                                        <div className="team-member-info text-center">
                                            <h4 className='m-0'>Lorem Allay</h4>
                                            <p>CEO</p>
                                            <ul className="social-list p-0">
                                                {/* TODO Add Link */}
                                                <li><Link to='#'><FaFacebook /></Link></li>
                                                <li><Link to='#'><FaTwitter /></Link></li>
                                                <li><Link to='#'><FaLinkedin /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default TeamSection;