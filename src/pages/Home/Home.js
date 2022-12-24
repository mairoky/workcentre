import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import RegisterCta from '../../components/RegisterCta/RegisterCta';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import StatsSection from '../../components/StatsSection/StatsSection';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <ServicesSection />
            <RegisterCta />
            <AboutSection />
            <StatsSection />
        </div>
    );
};

export default Home;