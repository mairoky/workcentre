import React from 'react';
import { Bars } from 'react-loader-spinner';

const Loader = () => {
    return (
        <section
            className='section-loader'
            style={{
                height: '100vh',
                width: '100%'
            }}>
            <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                <Bars
                    height="80"
                    width="80"
                    color="#181818"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </section>
    );
};

export default Loader;