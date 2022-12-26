import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import LoginImage from '../../assets/images/process-01.png';
import './Login.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Handle Login Form
    const handleLogin = (data) => {

    }
    // Handle Google Login
    const handleGoogleLogIn = () => {

    }

    return (
        <section className='login'>
            <div className="container">
                <div className="row g-3 align-items-center">
                    <div className="col-lg-6 col-md-7 col-12">
                        <div className="card border-0 py-4">
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3 className='fw-semibold'>Login</h3>
                                    </div>
                                    <hr />
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email</label>
                                        <input {...register('email', { required: 'Email is Required.' })} type="email" id="email" className="form-control" />
                                        {errors.email && <p className='text-danger m-0'>{errors.email.message}</p>}
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="password">Password</label>
                                        <input {...register('password', { required: 'Password is Required.' })} type="password" id="password" className="form-control" />
                                        {errors.password && <p className='text-danger m-0'>{errors.password.message}</p>}
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-50 btn btn-general mt-3">Login</button>
                                        <Link to="/register" className="d-block mt-2">Don't have Account? <strong>Register Now</strong></Link>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <Link onClick={handleGoogleLogIn} className="w-50 btn btn-general"><FaGoogle /> Login with Google</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5 col-12">
                        <div className="login-image">
                            <img className='img-fluid' src={LoginImage} alt="work centre" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;