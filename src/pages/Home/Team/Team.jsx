import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.png'
import img4 from '../../../assets/images/team/4.jpg'
import img5 from '../../../assets/images/team/5.png'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Team = () => {
    return (
        <div className='pb-32'>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">

                <div className='text-center mb-12'>
                    <h3 className='text-[#FF3811] text-xl font-bold pb-5'>Team</h3>
                    <h4 className='text-[#151515] text-5xl font-bold pb-5'>Meet Our Team</h4>
                    <p className='text-[#737373] text-base font-normal'>
                        The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.
                    </p>
                </div>
            </div>
            <Carousel
                additionalTransfrom={0}
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlay={true}
                autoPlaySpeed={1600}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

            >
                <div className='px-6'>
                    <div className="p-6 rounded-lg border-2 border-[#E8E8E8] hover:bg-[#E8E8E8]">
                        <figure>
                            <img className=' mx-auto h-60 rounded-lg' src={img1} alt="Services" />
                        </figure>
                        <div className=''>
                            <h2 className="text-[#444] text-xl font-bold mt-5 text-center">Lead Automotive Engineer</h2>
                            <p className='mt-2 text-[#737373] text-base font-semibold text-center'>Engine Diagnostics Expert</p>
                            <div className='flex gap-3 justify-center pt-5 pb-6 items-center'>
                                <Link to='https://www.facebook.com/shuvro.roy.315/'>
                                    <FaFacebook className='text-[#395185] text-[40px] '></FaFacebook>
                                </Link>
                                <Link to='https://twitter.com/i/flow/signup'>
                                    <AiFillTwitterCircle className='text-[#55ACEE] text-[46px] '></AiFillTwitterCircle>
                                </Link>
                                <Link to='https://www.linkedin.com/in/shuvro-roy-1bba66308/'>
                                    <FaLinkedinIn className='bg-[#0A66C2] text-white text-[40px] rounded-full p-2'></FaLinkedinIn>
                                </Link>
                                <Link to='https://www.instagram.com/'>
                                    <FaInstagram className='bg-gradient-to-r from-[#774ADF] via-[#BD4697] to-[#EF545E] text-[40px] rounded-full p-2'></FaInstagram>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-6'>
                    <div className="p-6 rounded-lg border-2 border-[#E8E8E8] hover:bg-[#E8E8E8]">
                        <figure>
                            <img className=' mx-auto h-60 rounded-lg' src={img2} alt="Services" />
                        </figure>
                        <div className=''>
                            <h2 className="text-[#444] text-xl font-bold mt-5 text-center">Mechanical Engineer</h2>
                            <p className='mt-2 text-[#737373] text-base font-semibold text-center'>Suspension Design Expert</p>
                            <div className='flex gap-3 justify-center pt-5 pb-6 items-center'>
                                <Link to='https://www.facebook.com/shuvro.roy.315/'>
                                    <FaFacebook className='text-[#395185] text-[40px] '></FaFacebook>
                                </Link>
                                <Link to='https://twitter.com/i/flow/signup'>
                                    <AiFillTwitterCircle className='text-[#55ACEE] text-[46px] '></AiFillTwitterCircle>
                                </Link>
                                <Link to='https://www.linkedin.com/in/shuvro-roy-1bba66308/'>
                                    <FaLinkedinIn className='bg-[#0A66C2] text-white text-[40px] rounded-full p-2'></FaLinkedinIn>
                                </Link>
                                <Link to='https://www.instagram.com/'>
                                    <FaInstagram className='bg-gradient-to-r from-[#774ADF] via-[#BD4697] to-[#EF545E] text-[40px] rounded-full p-2'></FaInstagram>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-6'>
                    <div className="p-6 rounded-lg border-2 border-[#E8E8E8] hover:bg-[#E8E8E8]">
                        <figure>
                            <img className=' mx-auto h-60 rounded-lg' src={img3} alt="Services" />
                        </figure>
                        <div className=''>
                            <h2 className="text-[#444] text-xl font-bold mt-5 text-center">Electrical Systems Engineer</h2>
                            <p className='mt-2 text-[#737373] text-base font-semibold text-center'>Vehicle Electrical Architecture</p>
                            <div className='flex gap-3 justify-center pt-5 pb-6 items-center'>
                                <Link to='https://www.facebook.com/shuvro.roy.315/'>
                                    <FaFacebook className='text-[#395185] text-[40px] '></FaFacebook>
                                </Link>
                                <Link to='https://twitter.com/i/flow/signup'>
                                    <AiFillTwitterCircle className='text-[#55ACEE] text-[46px] '></AiFillTwitterCircle>
                                </Link>
                                <Link to='https://www.linkedin.com/in/shuvro-roy-1bba66308/'>
                                    <FaLinkedinIn className='bg-[#0A66C2] text-white text-[40px] rounded-full p-2'></FaLinkedinIn>
                                </Link>
                                <Link to='https://www.instagram.com/'>
                                    <FaInstagram className='bg-gradient-to-r from-[#774ADF] via-[#BD4697] to-[#EF545E] text-[40px] rounded-full p-2'></FaInstagram>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-6'>
                    <div className="p-6 rounded-lg border-2 border-[#E8E8E8] hover:bg-[#E8E8E8]">
                        <figure>
                            <img className=' mx-auto h-60 rounded-lg' src={img4} alt="Services" />
                        </figure>
                        <div className=''>
                            <h2 className="text-[#444] text-xl font-bold mt-5 text-center">Automotive Design Engineer</h2>
                            <p className='mt-2 text-[#737373] text-base font-semibold text-center'>Aerodynamics and Body Design</p>
                            <div className='flex gap-3 justify-center pt-5 pb-6 items-center'>
                                <Link to='https://www.facebook.com/shuvro.roy.315/'>
                                    <FaFacebook className='text-[#395185] text-[40px] '></FaFacebook>
                                </Link>
                                <Link to='https://twitter.com/i/flow/signup'>
                                    <AiFillTwitterCircle className='text-[#55ACEE] text-[46px] '></AiFillTwitterCircle>
                                </Link>
                                <Link to='https://www.linkedin.com/in/shuvro-roy-1bba66308/'>
                                    <FaLinkedinIn className='bg-[#0A66C2] text-white text-[40px] rounded-full p-2'></FaLinkedinIn>
                                </Link>
                                <Link to='https://www.instagram.com/'>
                                    <FaInstagram className='bg-gradient-to-r from-[#774ADF] via-[#BD4697] to-[#EF545E] text-[40px] rounded-full p-2'></FaInstagram>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-6'>
                    <div className="p-6 rounded-lg border-2 border-[#E8E8E8] hover:bg-[#E8E8E8]">
                        <figure>
                            <img className=' mx-auto h-60 rounded-lg' src={img5} alt="Services" />
                        </figure>
                        <div className=''>
                            <h2 className="text-[#444] text-xl font-bold mt-5 text-center">Powertrain Engineer</h2>
                            <p className='mt-2 text-[#737373] text-base font-semibold text-center'>Drivetrain Efficiency Expert</p>
                            <div className='flex gap-3 justify-center pt-5 pb-6 items-center'>
                                <Link to='https://www.facebook.com/shuvro.roy.315/'>
                                    <FaFacebook className='text-[#395185] text-[40px] '></FaFacebook>
                                </Link>
                                <Link to='https://twitter.com/i/flow/signup'>
                                    <AiFillTwitterCircle className='text-[#55ACEE] text-[46px] '></AiFillTwitterCircle>
                                </Link>
                                <Link to='https://www.linkedin.com/in/shuvro-roy-1bba66308/'>
                                    <FaLinkedinIn className='bg-[#0A66C2] text-white text-[40px] rounded-full p-2'></FaLinkedinIn>
                                </Link>
                                <Link to='https://www.instagram.com/'>
                                    <FaInstagram className='bg-gradient-to-r from-[#774ADF] via-[#BD4697] to-[#EF545E] text-[40px] rounded-full p-2'></FaInstagram>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Team;