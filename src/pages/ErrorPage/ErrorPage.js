import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <section className='error-page'>
            <div className="h-100 d-flex justify-content-center align-items-center error-page-container">
                <div className="content-box text-center">
                    <h1 className='m-0'>404</h1>
                    <h3 className='m-0'>Look like you're lost!</h3>
                    <p>The page you are looking for not available!</p>
                    <Link to="/" className="btn btn-general">Back to Home</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;