import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div>
            <div className="p-6 rounded-lg border-2 border-[#E8E8E8] hover:bg-[#E8E8E8]">
                <figure>
                    <img className=' mx-auto h-60 rounded-lg' src={img} alt="Services" />
                </figure>
                <div className=''>
                    <h2 className="text-[#444] text-2xl font-bold mt-5">{title}</h2>
                    <div className='flex justify-between my-5'>
                        <p className='text-[#FF3811] text-xl font-semibold'>Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <button className='text-[#FF3811] text-3xl'><GoArrowRight></GoArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;