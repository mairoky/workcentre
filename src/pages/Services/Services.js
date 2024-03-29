import React from 'react';
import Banner from '../../components/Banner/Banner';
import Admin from '../../assets/images/services/admin.jpg';
import Factory from '../../assets/images/services/factory.jpg';
import Healthcare from '../../assets/images/services/healthcare.jpg';
import Hospitality from '../../assets/images/services/hospitality.jpg';
import It from '../../assets/images/services/it.jpg';
import Retail from '../../assets/images/services/retail.jpg';
import Security from '../../assets/images/services/security.jpg';
import Event from '../../assets/images/services/event.jpg';
import SingleService from './components/SingleService/SingleService';

const Services = () => {
    const heading = "Services We Provide";
    const shortDes = "The Easiest Way to Get Your New Dream Job";

    const services = [
        {
            "id": "5a8053eb-0491-455c-b49f-a75702d0fdac",
            "service_name": "Hospitality Management",
            "service_image": `${Hospitality}`,
        },
        {
            "id": "5a8053eb-0491-455c-b49f-a75702d0fdaf",
            "service_name": "Health Care",
            "service_image": `${Healthcare}`
        },
        {
            "id": "5a8053eb-0491-455c-b49f-a75702d0fdag",
            "service_name": "Retail & Accounting",
            "service_image": `${Retail}`
        },
        {
            "id": "5a8053eb-0491-455c-b49f-a75702d0fdac",
            "service_name": "Security",
            "service_image": `${Security}`
        },
        {
            "id": "5a8053eb-0491-455c-b49f-a75702d0fdad",
            "service_name": "HR, Admin & Receptionist",
            "service_image": `${Admin}`
        },
        {
            "id": "5a8053eb-0491-455c-b49f-a75702d0fdae",
            "service_name": "Factory",
            "service_image": `${Factory}`
        },
        {
            "id": "5a8053eb-0491-455c-b49f-a75702d0fdah",
            "service_name": "IT & Computing",
            "service_image": `${It}`
        },
        {
            "id": "5a8053eb-0491-455c-b49f-a75702d0fdai",
            "service_name": "Event Management",
            "service_image": `${Event}`
        }
    ];

    return (
        <div>
            <Banner heading={heading} shortDes={shortDes}></Banner>
            <div className='all-services py-5'>
                <div className="container">
                    <div className="row">
                        {
                            services.map(service => <SingleService key={service?.id} service={service} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;