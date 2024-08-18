import React from 'react';

const BookingRow = ({ booking, handleDelete }) => {

    const { _id, service, price, date, email, phoneNumber, message, customerName, img } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
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
            </th>
            <td>
                <div className="flex items-center gap-5">
                    <div className="avatar">
                        <div className="mask mask-squircle h-32 w-32">
                            {img && <img src={img} alt="Avatar" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold text-[#444] text-xl">{service}</div>
                        <div className="text-sm text-[#969696] max-w-[200px]">{message}</div>
                    </div>
                </div>
            </td>
            <td className='text-[#444] text-xl font-semibold'>
                ${price}
            </td>
            <td className='text-[#2D2D2D] text-xl font-medium'>
                {date}
            </td>
            <th>
                <button className="btn btn-sm bg-[#FF3811] text-sm border-none text-white font-semibold hover:bg-[rgb(199,49,19)] hover:border-none">Pending</button>
            </th>
        </tr>
    );
};

export default BookingRow;