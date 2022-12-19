import React from 'react';
import Banner from '../../components/Banner/Banner';
import ContactSection from '../../components/ContactSection/ContactSection';

const Contact = () => {
    const heading = "Contact Us";
    const shortDes = "Feel Free to ask us any questions or let's do to talk about future opportunities.";
    return (
        <div>
            {/* Contact Banner */}
            <Banner heading={heading} shortDes={shortDes} />
            <ContactSection />
        </div>
    );
};

export default Contact;