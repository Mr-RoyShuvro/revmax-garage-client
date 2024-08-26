import React, { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import CheckOutBanner from './CheckOutBanner';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {

    const service = useLoaderData();
    const { title, price, _id, img } = service;

    const { user } = useContext(AuthContext);

    const handleCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const message = form.message.value;

        const booking = {
            customerName: name,
            email,
            phoneNumber: phone,
            date,
            price,
            message,
            img,
            service: title,
            service_id: _id
        }

        console.log(booking);

        fetch('https://revmax-garage-server-1.onrender.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: "Successfully Added!",
                        text: "Your booking has been confirmed.",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <CheckOutBanner title={title}></CheckOutBanner>
            <div className="hero min-h-screen py-32">
                <div className="card bg-[#F3F3F3] w-full shrink-0 py-10 md:py-28 px-5 md:px-32 max-w-sm md:max-w-5xl">
                    <form onSubmit={handleCheckOut}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className="form-control">
                                <input type="text" name='name' placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered bg-white text-[#929292]" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered bg-white text-[#929292]" required />
                            </div>
                            <div className="form-control">
                                <input type='date' name='date' className="input input-bordered bg-white text-[#929292]" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name='phone' placeholder="Phone Number" defaultValue={user?.phone} className="input input-bordered bg-white text-[#929292]" required />
                            </div>
                        </div>
                        <textarea className="textarea textarea-bordered bg-white mt-6 w-full h-40 text-[#929292]" name='message' placeholder="Your Message"></textarea>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-base border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Order Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;