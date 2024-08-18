import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    const { _id, service, price, date, email, phoneNumber, message, customerName, img, status } = booking;

    return (
        <div className='hover:bg-white flex flex-col md:flex-row gap-20 justify-center items-center px-10 py-5'>
            <div>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm bg-[#b82c10]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div>
                <div className="flex items-center gap-10">
                    <div className="avatar">
                        <div className="mask mask-squircle h-32 w-32">
                            {img && <img src={img} alt="Avatar" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold text-[#444] text-xl mb-5">{service}</div>
                        <div className="text-sm text-[#969696] w-52 ">{message}</div>
                    </div>
                </div>
            </div>
            <div className='text-[#444] text-xl font-semibold w-28'>
                ${price}
            </div>
            <div className='text-[#2D2D2D] text-xl font-medium w-28'>
                {date}
            </div>
            <div>
                {
                    status === 'confirm' ? <button onClick={() => handleBookingConfirm(_id)} className="btn btn-sm bg-[#ad1d00] text-sm border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Confirmed</button>
                        : <button onClick={() => handleBookingConfirm(_id)} className="btn btn-sm bg-[#FF3811] text-sm border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Pending</button>
                }
            </div>
        </div>
    );
};

export default BookingRow;