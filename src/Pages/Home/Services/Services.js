import React, { useEffect, useState } from 'react';
import ServiceCard from '../../../Component/ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);


    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])


    return (
        <div className='text-center max-w-4xl'>
            <h1 className='text-2xl font-semibold'>Our Services Area</h1>
            <p className='mt-2 mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid grid-cols-3 gap-4 mb-5'>
            {services.map(service => <ServiceCard key={service._id} service = {service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;