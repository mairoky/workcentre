import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dropzone, FileMosaic } from "@files-ui/react";
import './Submitcv.css';

const Submitcv = () => {
    const [files, setFiles] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const updateFiles = (incomingFiles) => {
        //do something with the files
        console.log("incoming files", incomingFiles);
        setFiles(incomingFiles);
    };
    const removeFile = (id) => {
        setFiles(files.filter((x) => x.id !== id));
    };
    const handleSubmitCV = (data) => {
        // console.log('form data', data);
        // Handle Application Data
        // Save form data to database
    }

    return (
        <div className='submit-cv p-5'>
            <section className='application-form'>
                <div className="container">
                    <div className="row">
                        <div className="m-auto col-10">
                            <div className="card">
                                {/* <div className="text-center">
                                    <h4>Job Application</h4>
                                    <h1>Start Your Career Today</h1>
                                    <p>Please fill in your information and send it to us.</p>
                                </div> */}
                                <form onSubmit={handleSubmit(handleSubmitCV)}>
                                    <div className="card-body">
                                        <div className="form-group mt-2">
                                            <label htmlFor="name">Your Name</label>
                                            <input {...register('name', {
                                                required: "Name is Required."
                                            })} type="text" id="name" className="form-control" />
                                            {errors.name && <p className='text-danger m-0'>{errors.name.message}</p>}
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="email">Your Email</label>
                                            <input {...register('email')} type="email" id="email" className="form-control" />
                                            {errors.email && <p className='text-danger m-0'>{errors.email.message}</p>}
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input {...register('phone')} type="text" id="phone" className="form-control" />
                                            {errors.phone && <p className='text-danger m-0'>{errors.phone.message}</p>}
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="gender">Gender</label>
                                            <select {...register('gender')} id="gender" className='form-select' required>
                                                <option selected disabled value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="title">Professional Title</label>
                                            <input {...register('title')} type="text" id="title" className="form-control" />
                                            {errors.title && <p className='text-danger m-0'>{errors.title.message}</p>}
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="location">Preferred Job Location</label>
                                            <input {...register('location')} type="text" id="location" className="form-control" />
                                            {errors.location && <p className='text-danger m-0'>{errors.location.message}</p>}
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="category">Job Category</label>
                                            <select {...register('category')} id="category" className='form-select' required>
                                                <option selected disabled value="">Select Category</option>
                                                <option value="">Hotel Management</option>
                                            </select>
                                        </div>
                                        <div className="mt-3">
                                            <label htmlFor="fileUpload">Upload Your Resume</label>
                                            <Dropzone
                                                color="#1c1c1c"
                                                background="radial-gradient(circle at 18.7% 37.8%, #f0f0f0 0%, #cebb85 90%);"
                                                onChange={updateFiles}
                                                value={files}
                                                accept=".pdf"
                                                maxFiles={1}
                                                maxFileSize={2 * 1024 * 1024}
                                                label="Drag'n Drop files here or Click to Browse"
                                            >
                                                {files.map((file) => (
                                                    <FileMosaic
                                                        key={file.id}
                                                        {...file}
                                                        onDelete={removeFile}
                                                        preview
                                                        info />
                                                ))}
                                            </Dropzone>
                                        </div>
                                        <div className='text-center mt-2 p-3'>
                                            <button className='btn-general fw-semibold' type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Submitcv;