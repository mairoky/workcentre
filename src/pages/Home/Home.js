import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import RegisterCta from '../../components/RegisterCta/RegisterCta';
import ServicesSection from '../../components/ServicesSection/ServicesSection';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <ServicesSection />
            <AboutSection />
            <RegisterCta />
        </div>
    );
};

export default Home;