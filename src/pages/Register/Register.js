import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import RegisterImage from '../../assets/images/process-02.png';
import './Register.css';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // Handle Register Form
    const handleRegister = (data) => {

    }
    return (
        <section className='register'>
            <div className="container">
                <div className="row g-3 align-items-lg-center">
                    <div className="col-lg-6 col-md-5 col-12">
                        <div className="register-image">
                            <img className='img-fluid' src={RegisterImage} alt="Work Centre" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7 col-12">
                        <div className="card border-0 py-4">
                            <form onSubmit={handleSubmit(handleRegister)}>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3>Create Account</h3>
                                    </div>
                                    <hr />
                                    <div className="form-group mt-2">
                                        <label htmlFor="name">Name</label>
                                        <input {...register('name', {
                                            required: "Name is Required."
                                        })} type="text" id="name" className="form-control" />
                                        {errors.name && <p className='text-danger m-0'>{errors.name.message}</p>}
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email</label>
                                        <input {...register('email')} type="email" id="email" className="form-control" />
                                        {errors.email && <p className='text-danger m-0'>{errors.email.message}</p>}
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="password">Password</label>
                                        <input {...register('password')} type="password" id="password" className="form-control" required />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-50 btn btn-general mt-3">Register</button>
                                        <Link to="/login" className="d-block mt-2">Already have an Account? <strong>Login Now</strong></Link>
                                    </div>
                                    {/* <hr />
                                    <div className="text-center">
                                        <Link onClick={handleGoogleLogIn} className="w-50 btn btn-outline-dark"><FaGoogle /> Signup with Google</Link>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;