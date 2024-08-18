import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data);
            })
    }, []);


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining);
                        }

                    })
            }
        });
    }


    return (
        <div>
            <h3>{bookings.length}</h3>
            <div className="overflow-x-auto max-w-5xl mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-gray-300'>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className='font-bold text-[#444] text-xl'>Service Details</th>
                            <th className='font-bold text-[#444] text-xl'>Price</th>
                            <th className='font-bold text-[#444] text-xl'>Booking Date</th>
                            <th className='font-bold text-[#444] text-xl'>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow key={booking._id} handleDelete={handleDelete} booking={booking}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;