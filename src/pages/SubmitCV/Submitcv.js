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
        <div>
            <section className='submit-cv-header'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Submit Your CV</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className='application-form my-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <form onSubmit={handleSubmit(handleSubmitCV)}>
                                    <div className="card-body">
                                        <div className="form-group mt-2">
                                            <label htmlFor="name">YOUR NAME</label>
                                            <input {...register('name', {
                                                required: "Name is Required."
                                            })} type="text" id="name" className="form-control" placeholder='Your Name' />
                                            {errors.name && <p className='text-danger m-0'>{errors.name.message}</p>}
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="email">YOUR EMAIL</label>
                                            <input {...register('email')} type="email" id="email" className="form-control" placeholder='Your Email' />
                                            {errors.email && <p className='text-danger m-0'>{errors.email.message}</p>}
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="phone">YOUR PHONE</label>
                                            <input {...register('phone')} type="text" id="phone" className="form-control" placeholder='Your Phone Number' />
                                            {errors.phone && <p className='text-danger m-0'>{errors.phone.message}</p>}
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="gender">SELECT GENDER</label>
                                            <select {...register('gender')} id="gender" className='form-select' required>
                                                <option selected disabled value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="title">PROFESSIONAL TITLE</label>
                                            <input {...register('title')} type="text" id="title" className="form-control" placeholder='Professional Title' />
                                            {errors.title && <p className='text-danger m-0'>{errors.title.message}</p>}
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="location">PREFERRED JOB LOCATION</label>
                                            <input {...register('location')} type="text" id="location" className="form-control" placeholder='Preferred Location' />
                                            {errors.location && <p className='text-danger m-0'>{errors.location.message}</p>}
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor="category">SELECT JOB CATEGORY</label>
                                            <select {...register('category')} id="category" className='form-select' required>
                                                <option selected disabled value="">Select Category...</option>
                                                <option value="">Hotel Management</option>
                                            </select>
                                        </div>
                                        <div className="mt-3">
                                            <Dropzone
                                                onChange={updateFiles}
                                                value={files}
                                            >
                                                {files.map((file) => (
                                                    <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
                                                ))}
                                            </Dropzone>
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