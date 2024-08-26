import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdOutlinePermPhoneMsg } from 'react-icons/md';
import { PiMapPinAreaBold } from 'react-icons/pi';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ContactInfo = () => {
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className='pt-10 pb-20 px-1 md:px-0'>
                <div className='flex flex-col items-center md:flex-row gap-20 md:justify-evenly bg-[#151515]  rounded-lg py-24'>
                    <div className='flex gap-5 items-center'>
                        <FaCalendarAlt className='text-5xl text-[#FF3811]'></FaCalendarAlt>
                        <div>
                            <h3 className='text-base font-medium text-white'>We are open monday-friday</h3>
                            <h2 className='text-2xl font-bold text-white mt-3'>7:00 am - 9:00 pm</h2>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <MdOutlinePermPhoneMsg className='text-5xl text-[#FF3811]'></MdOutlinePermPhoneMsg>
                        <div>
                            <h3 className='text-base font-medium text-white'>Have a question?</h3>
                            <h2 className='text-2xl font-bold text-white mt-3'>+2546 251 2658</h2>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <PiMapPinAreaBold className='text-5xl text-[#FF3811]'></PiMapPinAreaBold>
                        <div>
                            <h3 className='text-base font-medium text-white'>Need a repair? our address</h3>
                            <h2 className='text-2xl font-bold text-white mt-3'>Liza Street, New York</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;