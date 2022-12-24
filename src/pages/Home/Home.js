import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import ContactCta from '../../components/ContactCta/ContactCta';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import RegisterCta from '../../components/RegisterCta/RegisterCta';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import StatsSection from '../../components/StatsSection/StatsSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <ServicesSection />
            <RegisterCta />
            <AboutSection />
            <StatsSection />
            <TestimonialSection />
            <ContactCta />
        </div>
    );
};

export default Home;