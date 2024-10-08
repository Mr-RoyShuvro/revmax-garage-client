import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
import BookingBanner from './BookingBanner';
// import axios from 'axios';
import UseAxiosSecure from '../../hooks/UseAxiosSecure';

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = UseAxiosSecure();


    // const url = `https://revmax-garage-server-1.onrender.com/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {

        axiosSecure.get(url)
            .then(data => {
                setBookings(data.data);
            })

        // axios.get(url, {withCredentials: true})
        // .then(data=> {
        //     setBookings(data.data);
        // })
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

                fetch(`https://revmax-garage-server-1.onrender.com/bookings/${id}`, {
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

    /* Update pending booking to confirmed */
    const handleBookingConfirm = id => {
        fetch(`https://revmax-garage-server-1.onrender.com/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Confirmed!",
                        text: "Your booking has been Confirmed.",
                        icon: "success"
                    });
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div>
            <BookingBanner></BookingBanner>
            <div className="overflow-x-auto max-w-6xl mx-auto pt-20 pb-32 ">
                <div className='bg-gray-100 rounded-lg'>
                    {/* row 1 */}
                    {
                        bookings.map(booking => <BookingRow key={booking._id}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                            booking={booking}>
                        </BookingRow>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookings;