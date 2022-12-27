import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import LoginImage from '../../assets/images/process-01.png';
import './Login.css';
import { toast } from 'react-hot-toast';

const Login = () => {
    // Get Auth Context Data
    const { loginUser, socialLogin, setLoading } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [loginUserEmail, setLoginUserEmail] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // Handle Login Form
    const handleLogin = (data) => {
        // console.log(data);
        const { email, password } = data;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setLoginUserEmail(email);
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
    // Handle Google Login
    const handleGoogleLogIn = () => {
        socialLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // saveUserToDB(user?.displayName, user?.email);
            })
            .catch(err => console.error(err))
    }

    return (
        <section className='login'>
            <div className="container">
                <div className="row g-3 align-items-center">
                    <div className="col-md-7 col-12">
                        <div className="card border-0">
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
                    <div className="col-md-5 col-12">
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