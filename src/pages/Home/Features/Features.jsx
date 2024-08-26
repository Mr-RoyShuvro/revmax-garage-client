import React from 'react';
import { BiSolidCarMechanic } from 'react-icons/bi';
import { FcAlarmClock } from 'react-icons/fc';
import { GiClockwork } from 'react-icons/gi';
import { MdContactSupport, MdDeliveryDining, MdOutlineSecurity } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Features = () => {
    return (
        <div className='pb-32'>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='text-center mb-12'>
                    <h3 className='text-[#FF3811] text-xl font-bold pb-5'>Core Features</h3>
                    <h4 className='text-[#151515] text-5xl font-bold pb-5'>Why Choose Us</h4>
                    <p className='text-[#737373] text-base font-normal'>
                        The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                <div data-aos="zoom-out-up">
                    <div className="py-10 px-10 border-2 rounded-xl border-[#E8E8E8] flex flex-col justify-center items-center hover:bg-[#FF3811] group">
                        <RiTeamLine className="text-7xl text-[#FF3811] group-hover:text-white"></RiTeamLine>
                        <h3 className="text-[#444] text-lg font-bold pt-5 group-hover:text-white">Expert Team</h3>
                    </div>
                </div>
                <div data-aos="zoom-out-up">
                    <div className="py-10 px-10 border-2 rounded-xl border-[#E8E8E8] flex flex-col justify-center items-center hover:bg-[#FF3811] group">
                        <GiClockwork className="text-7xl text-[#FF3811] group-hover:text-white"></GiClockwork>
                        <h3 className="text-[#444] text-lg font-bold pt-5 group-hover:text-white">Expert Team</h3>
                    </div>
                </div>
                <div data-aos="zoom-out-up">
                    <div className="py-10 px-10 border-2 rounded-xl border-[#E8E8E8] flex flex-col justify-center items-center hover:bg-[#FF3811] group">
                        <MdContactSupport className="text-7xl text-[#FF3811] group-hover:text-white"></MdContactSupport>
                        <h3 className="text-[#444] text-lg font-bold pt-5 group-hover:text-white">Expert Team</h3>
                    </div>
                </div>
                <div data-aos="zoom-out-up">
                    <div className="py-10 px-10 border-2 rounded-xl border-[#E8E8E8] flex flex-col justify-center items-center hover:bg-[#FF3811] group">
                        <BiSolidCarMechanic className="text-7xl text-[#FF3811] group-hover:text-white"></BiSolidCarMechanic>
                        <h3 className="text-[#444] text-lg font-bold pt-5 group-hover:text-white">Expert Team</h3>
                    </div>
                </div>
                <div data-aos="zoom-out-up">
                    <div className="py-10 px-10 border-2 rounded-xl border-[#E8E8E8] flex flex-col justify-center items-center hover:bg-[#FF3811] group">
                        <MdOutlineSecurity className="text-7xl text-[#FF3811] group-hover:text-white"></MdOutlineSecurity>
                        <h3 className="text-[#444] text-lg font-bold pt-5 group-hover:text-white">Expert Team</h3>
                    </div>
                </div>
                <div data-aos="zoom-out-up">
                    <div className="py-10 px-10 border-2 rounded-xl border-[#E8E8E8] flex flex-col justify-center items-center hover:bg-[#FF3811] group">
                        <MdDeliveryDining className="text-7xl text-[#FF3811] group-hover:text-white"></MdDeliveryDining>
                        <h3 className="text-[#444] text-lg font-bold pt-5 group-hover:text-white">Expert Team</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;