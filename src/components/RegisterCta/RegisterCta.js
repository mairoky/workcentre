import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterCta.css';

const RegisterCta = () => {
    return (
        <section className="register-cta">
            <div className="container">
                <div className="cta-container rounded">
                    <div className="row p-5 align-items-lg-center">
                        <div className="col-lg-7 col-md-12 col-12 text-lg-start text-center">
                            <div className="section-heading">
                                <h1 className="fw-semibold">Ready to Apply?</h1>
                                <p className="">It is a long established fact that a reader will be distracted by
                                    the readable
                                    content of
                                    a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12 text-lg-end text-center">
                            <Link to='/apply' className="btn btn-general-outline fw-semibold">Submit your CV</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterCta;