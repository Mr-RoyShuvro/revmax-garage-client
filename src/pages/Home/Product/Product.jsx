import React from 'react';
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'
import { Rating } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Product = () => {
    return (
        <div className='pb-32 pt-10'>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='text-center '>
                    <h3 className='text-[#FF3811] text-xl font-bold pb-5'>Popular Products</h3>
                    <h4 className='text-[#151515] text-5xl font-bold pb-5'>Browse Our Products</h4>
                    <p className='text-[#737373] text-base font-normal'>
                        The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>

                {/* product-1 */}
                <div data-aos="flip-left">
                <div className="p-6 rounded-lg border-2 border-[#E8E8E8] mx-5 md:mx-0">
                    <figure className='h-60 bg-[#E8E8E8] flex justify-center items-center py-8 '>
                        <img className='max-h-48' src={img1} alt="Services" />
                    </figure>
                    <div className='text-center pt-5'>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                        <h2 className="text-[#444] text-2xl font-bold mt-1">Car Engine Plug</h2>
                        <p className='text-[#FF3811] text-xl font-semibold mt-3 mb-7'>Price: $199.99</p>
                    </div>
                </div>
                </div>
                {/* product-2 */}
                <div data-aos="flip-left">
                <div className="p-6 rounded-lg border-2 border-[#E8E8E8] mx-5 md:mx-0">
                    <figure className='h-60 bg-[#E8E8E8] flex justify-center items-center py-8 '>
                        <img className='max-h-48' src={img2} alt="Services" />
                    </figure>
                    <div className='text-center pt-5'>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                        <h2 className="text-[#444] text-2xl font-bold mt-1">Car Air Filter</h2>
                        <p className='text-[#FF3811] text-xl font-semibold mt-3 mb-7'>Price: $27.99</p>
                    </div>
                </div>
                </div>
                {/* product-3 */}
                <div data-aos="flip-left">
                <div className="p-6 rounded-lg border-2 border-[#E8E8E8] mx-5 md:mx-0">
                    <figure className='h-60 bg-[#E8E8E8] flex justify-center items-center py-8 '>
                        <img className='max-h-48' src={img3} alt="Services" />
                    </figure>
                    <div className='text-center pt-5'>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                        <h2 className="text-[#444] text-2xl font-bold mt-1">Ceramic Brake Pads</h2>
                        <p className='text-[#FF3811] text-xl font-semibold mt-3 mb-7'>Price: $64.99</p>
                    </div>
                </div>
                </div>
                {/* product-4 */}
                <div data-aos="flip-left">
                <div className="p-6 rounded-lg border-2 border-[#E8E8E8] mx-5 md:mx-0">
                    <figure className='h-60 bg-[#E8E8E8] flex justify-center items-center py-8 '>
                        <img className='max-h-48' src={img4} alt="Services" />
                    </figure>
                    <div className='text-center pt-5'>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                        <h2 className="text-[#444] text-2xl font-bold mt-1">High-Performance Brake Pads</h2>
                        <p className='text-[#FF3811] text-xl font-semibold mt-3 mb-7'>Price: $54.99</p>
                    </div>
                </div>
                </div>
                {/* product-5 */}
                <div data-aos="flip-left">
                <div className="p-6 rounded-lg border-2 border-[#E8E8E8] mx-5 md:mx-0">
                    <figure className='h-60 bg-[#E8E8E8] flex justify-center items-center py-8 '>
                        <img className='max-h-48' src={img5} alt="Services" />
                    </figure>
                    <div className='text-center pt-5'>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                        <h2 className="text-[#444] text-2xl font-bold mt-1">All-Season Tire Set</h2>
                        <p className='text-[#FF3811] text-xl font-semibold mt-3 mb-7'>Price: $499.99</p>
                    </div>
                </div>
                </div>
                {/* product-6 */}
                <div data-aos="flip-left">
                <div className="p-6 rounded-lg border-2 border-[#E8E8E8] mx-5 md:mx-0">
                    <figure className='h-60 bg-[#E8E8E8] flex justify-center items-center py-8 '>
                        <img className='max-h-48' src={img6} alt="Services" />
                    </figure>
                    <div className='text-center pt-5'>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                        <h2 className="text-[#444] text-2xl font-bold mt-1">Long-Lasting Car Battery</h2>
                        <p className='text-[#FF3811] text-xl font-semibold mt-3 mb-7'>Price: $129.99</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Product;