import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Section from '../Section';
import Heading from '../Heading';

const TodayBooking = () => {
  const [bookings, setBookings] = useState([]);
  // const [token, setToken] = useState(JSON.parse(sessionStorage.getItem('token')))


    // console.log(token);
    

  const fetchBookings = async () => {
    try {
      // let axiosConfig = {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // };
      const response = await axios.get('http://localhost:8080/admin/bookingsForToday');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }

  };

  useEffect(() => {
    fetchBookings();
  }, []);



  return (
    // <Section id="allBookings" className="py-16">
      <div className="container">
        <Heading
          title="Today Bookings"
        />

        {/* Booking Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {bookings.map((booking) => (
            <div
              key={booking._id}
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

               
              </div>
            </div>
          ))}
        </div>
      </div>
    // </Section>
  );
};

export default TodayBooking;
