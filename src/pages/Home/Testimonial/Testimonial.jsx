import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import comma from '../../../assets/icons/comma.png'
import client1 from '../../../assets/images/testimonial/1.jpg'
import client2 from '../../../assets/images/testimonial/2.jpg'
import client3 from '../../../assets/images/testimonial/3.png'
import client4 from '../../../assets/images/testimonial/4.jpg'
import client5 from '../../../assets/images/testimonial/5.png'
import { Rating } from "@mui/material";

const Testimonial = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className='pb-32'>
            <div className='text-center mb-12'>
                <h3 className='text-[#FF3811] text-xl font-bold pb-5'>Testimonial</h3>
                <h4 className='text-[#151515] text-5xl font-bold pb-5'>What Customer Says</h4>
                <p className='text-[#737373] text-base font-normal mb-10'>
                    The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.
                </p>
                <div className="slider-container">
                    <Slider {...settings}>
                        {/* Testimonial-1 */}
                        <div className="px-3">
                            <div className="bg-white py-12 pl-12 pr-5 rounded-lg border-2 border-[#F3F3F3]">
                                <div className="flex justify-center items-center">
                                    <img className="rounded-full w-16 h-16" src={client1} alt="" />
                                    <div className="flex-1 text-left ml-5">
                                        <h3 className="text-2xl font-bold text-[#444] mb-2">John Anderson</h3>
                                        <p className="text-lg font-semibold text-[#737373]">Business Executive</p>
                                    </div>
                                    <img className="w-14 h-14 mr-20" src={comma} alt="" />
                                </div>
                                <div className="py-5 flex flex-col justify-start">
                                    <h3 className="text-left max-w-sm text-base font-normal pb-5">Revmax Garage offers exceptional service with unmatched professionalism. They provide clear explanations and cost-effective solutions for all car issues. I trust them completely with my vehicle. Highly recommended for reliable and top-quality automotive care.</h3>
                                    <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                                </div>
                            </div>
                        </div>
                        {/* Testimonial-2 */}
                        <div className="px-3">
                            <div className="bg-white py-12 pl-12 pr-5 rounded-lg border-2 border-[#F3F3F3]">
                                <div className="flex justify-center items-center">
                                    <img className="rounded-full w-16 h-16" src={client2} alt="" />
                                    <div className="flex-1 text-left ml-5">
                                        <h3 className="text-2xl font-bold text-[#444] mb-2">Emily Roberts</h3>
                                        <p className="text-lg font-semibold text-[#737373]">Marketing Specialist</p>
                                    </div>
                                    <img className="w-14 h-14 mr-20" src={comma} alt="" />
                                </div>
                                <div className="py-5 flex flex-col justify-start">
                                    <h3 className="text-left max-w-sm text-base font-normal pb-5">Revmax Garage is my go-to for car maintenance. Their knowledgeable team delivers honest, stress-free service and excellent customer care. They ensure my car runs smoothly and are always accommodating. I highly recommend them for top-quality, reliable auto service.</h3>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                </div>
                            </div>
                        </div>
                        {/* Testimonial-3 */}
                        <div className="px-3">
                            <div className="bg-white py-12 pl-12 pr-5 rounded-lg border-2 border-[#F3F3F3]">
                                <div className="flex justify-center items-center">
                                    <img className="rounded-full w-16 h-16" src={client3} alt="" />
                                    <div className="flex-1 text-left ml-5">
                                        <h3 className="text-2xl font-bold text-[#444] mb-2">Michael Harris</h3>
                                        <p className="text-lg font-semibold text-[#737373]">Software Engineer</p>
                                    </div>
                                    <img className="w-14 h-14 mr-20" src={comma} alt="" />
                                </div>
                                <div className="py-5 flex flex-col justify-start">
                                    <h3 className="text-left max-w-sm text-base font-normal pb-5">Revmax Garage is trustworthy and efficient. They provide clear diagnoses and affordable repairs with no unnecessary upselling. Their exceptional customer service and attention to detail make them my preferred choice for auto service. Highly recommended for reliable car maintenance.</h3>
                                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                </div>
                            </div>
                        </div>
                        {/* Testimonial-4 */}
                        <div className="px-3">
                            <div className="bg-white py-12 pl-12 pr-5 rounded-lg border-2 border-[#F3F3F3]">
                                <div className="flex justify-center items-center">
                                    <img className="rounded-full w-16 h-16" src={client4} alt="" />
                                    <div className="flex-1 text-left ml-5">
                                        <h3 className="text-2xl font-bold text-[#444] mb-2">John Thompson</h3>
                                        <p className="text-lg font-semibold text-[#737373]">Financial Consultant</p>
                                    </div>
                                    <img className="w-14 h-14 mr-20" src={comma} alt="" />
                                </div>
                                <div className="py-5 flex flex-col justify-start">
                                    <h3 className="text-left max-w-sm text-base font-normal pb-5">Revmax Garage delivers outstanding value and service. They offer honest assessments, fair pricing, and never push unnecessary repairs. Their clean facility and accommodating staff make each visit pleasant. I trust them with all my vehicle needs and recommend them for their quality and reliability.</h3>
                                    <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                                </div>
                            </div>
                        </div>
                        {/* Testimonial-5 */}
                        <div className="px-3">
                            <div className="bg-white py-12 pl-12 pr-5 rounded-lg border-2 border-[#F3F3F3]">
                                <div className="flex justify-center items-center">
                                    <img className="rounded-full w-16 h-16" src={client5} alt="" />
                                    <div className="flex-1 text-left ml-5">
                                        <h3 className="text-2xl font-bold text-[#444] mb-2">David Clark</h3>
                                        <p className="text-lg font-semibold text-[#737373]">Real Estate Agent</p>
                                    </div>
                                    <img className="w-14 h-14 mr-20" src={comma} alt="" />
                                </div>
                                <div className="py-5 flex flex-col justify-start">
                                    <h3 className="text-left max-w-sm text-base font-normal pb-5">Revmax Garage ensures my car is always in top condition. Their professional and friendly team provides honest service and excellent repairs. They respect my time and offer reliable, high-quality care. I highly recommend them for their dependable automotive service.</h3>
                                    <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
