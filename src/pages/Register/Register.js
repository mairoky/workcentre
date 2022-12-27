import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RegisterImage from '../../assets/images/process-02.png';
import { AuthContext } from '../../context/AuthProvider';
import './Register.css';

const Register = () => {
    // Get AuthContext Data
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [userEmail, setUserEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // Handle Register Form
    const handleRegister = (data) => {
        // console.log('form data', data);
        const { name, email, password } = data;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                handleProfileUpdate(name, email);
                toast.success(`${name} your account created successfully.`);
                navigate(from, { replace: true });
                reset();

            })
            .catch(err => {
                console.error(err.message);
                toast.error(err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    // Update user profile
    const handleProfileUpdate = (name, email) => {
        const profile = {
            displayName: name,
        }
        updateUserProfile(profile)
            .then(() => {
                // saveUserToDB(name, email, role);
            })
            .catch(err => console.error(err));
    }

    // TODO Save User to the Database
    // // Save user to the Database
    // const saveUserToDB = (name, email, role = 'job_seeker') => {
    //     const user = {
    //         name,
    //         email,
    //         role
    //     };
    //     fetch('https://resale-ecommerce-server.vercel.app/users', {
    //         method: 'POST',
    //         body: JSON.stringify(user),
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             toast.success(`${name} your ${role} account created successfully.`);
    //             setUserEmail(email);
    //             navigate(from, { replace: true });
    //         })
    // }
    return (
        <section className='register'>
            <div className="container">
                <div className="row g-3 align-items-center">
                    <div className="col-md-5 col-12">
                        <div className="register-image">
                            <img className='img-fluid' src={RegisterImage} alt="Work Centre" />
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        <div className="card border-0">
                            <form onSubmit={handleSubmit(handleRegister)}>
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3 className='fw-semibold'>Create Account</h3>
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