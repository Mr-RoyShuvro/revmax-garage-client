import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const service = useLoaderData();
    const { title, price } = service;

    return (
        <div className="hero min-h-screen py-32">
            <div className="card bg-[#F3F3F3] w-full shrink-0 py-10 md:py-28 px-5 md:px-32 max-w-sm md:max-w-5xl">
                <form className="">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <input type="text" placeholder="First Name" className="input input-bordered bg-white text-[#929292]" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Last Name" className="input input-bordered bg-white text-[#929292]" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Your Phone" className="input input-bordered bg-white text-[#929292]" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Your Email" className="input input-bordered bg-white text-[#929292]" required />
                        </div>
                    </div>
                    <textarea className="textarea textarea-bordered bg-white mt-6 w-full h-40" placeholder="Your Message"></textarea>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Checkout;