import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {


    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://revmax-garage-server-1.onrender.com/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data);
        })
    }, [])

    return (
        <div className='pb-32'>
            <div className='text-center'>
                <h3 className='text-[#FF3811] text-xl font-bold pb-5'>Service</h3>
                <h4 className='text-[#151515] text-5xl font-bold pb-5'>Our Service Area</h4>
                <p className='text-[#737373] text-base font-normal'>The majority have suffered alteration in some form, by injected humour, or randomised <br />words
                    which don't look even slightly believable.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {
                    services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;