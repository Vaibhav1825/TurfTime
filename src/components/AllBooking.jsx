import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Section from './Section';
import Heading from './Heading';

const AllBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [token, setToken] = useState(JSON.parse(sessionStorage.getItem('token')))

  const fetchBookings = async () => {
    try {
      
      // let axiosConfig = {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // };
      const id = JSON.parse(sessionStorage.getItem('User')).userId;
      console.log(id);
      
      const response = await axios.get(`http://localhost:8080/bookings/${id}`);
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }

  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancel = async (bookingId) => {
    try {
      const axiosConfig = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      // confirm to user are you sure then execute
      const confirmation = window.confirm(
        "Are you sure you want to cancel this booking?"
      );
      if (!confirmation) return;

      const response = await axios.delete(`http://localhost:8080/bookings/${bookingId}`,axiosConfig);
      console.log(response);
      
      if (response.status === 200) {
        // Update the bookings state to reflect the cancellation
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === bookingId ? { ...booking, status: 'CANCELLED' } : booking
          )
        );
        console.log(`Booking with ID: ${bookingId} has been cancelled.`);
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  };

  return (
    <Section id="allBookings" className="py-16">
      <div className="container">
        <Heading
          title="Your Bookings"
          text="Review your bookings below. You can cancel upcoming bookings if needed."
        />

        {/* Booking Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {bookings.map((booking) => (
            <div
              key={booking.bookId}
              className="relative p-4 bg-n-8 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-n-9 opacity-30"></div>

              <div className="relative z-10 p-4">
              <h4 className="text-xl font-semibold mb-2 text-n-1">{booking.sport}</h4>
                <p className="text-n-3 mb-4">Date: {new Date(booking.bookingDate).toLocaleDateString()}</p>
                <p className="text-n-3 mb-4">Slot: {booking.slot}</p>
                <p className="text-n-3 mb-4">Price: &#8377;{booking.totalPrice}</p>
                <p className="text-n-3 mb-4">Coupon: {booking.coupon}</p>
                
                <p className="text-n-3 mb-4">Status: {booking.status}</p>
                {new Date(booking.bookingDate) > new Date() && booking.status === 'CONFIRMED' &&(
                  <button
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => handleCancel(booking.bookId)}
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AllBooking;
