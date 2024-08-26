import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
import { Link } from 'react-router-dom'; import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
    return (
        <div className="hero bg-white min-h-screen pt-32 pb-52">
            <div className="flex flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl border-8 border-white absolute right-5 top-2/3" />
                </div>
                <div className='lg:w-1/2 px-10'>
                    <div data-aos="fade-right">
                        <h3 className='text-[#FF3811] text-xl font-bold mb-5'>About Us</h3>
                        <h1 className="text-5xl font-bold text-[#151515] mb-7">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="text-[#737373] text-base font-medium mb-5">
                            There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br /> look even slightly believable.
                        </p>
                        <p className="text-[#737373] text-base font-medium mb-7">
                            The majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable.
                        </p>
                    </div>
                    <Link to="/about">
                        <button className="btn mr-5 bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Get More Info</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;