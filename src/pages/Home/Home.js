import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import RegisterCta from '../../components/RegisterCta/RegisterCta';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <AboutSection />
            <RegisterCta />
        </div>
    );
};

export default Home;