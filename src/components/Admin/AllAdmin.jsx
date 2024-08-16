import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Section from '../Section';
import Heading from '../Heading';

const AllAdmin = () => {
  const [admins, setAdmins] = useState([]);
  // const [token, setToken] = useState(JSON.parse(sessionStorage.getItem('token')))


  // console.log(token);


  const fetchAdmins = async () => {
    try {
      // let axiosConfig = {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // };
      const response = await axios.get('http://localhost:8080/admin/all');
      console.log(response.data);
      setAdmins(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }

  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  

return (
  // <Section id="allBookings" className="py-16">
  <div className="container">
    <Heading
      title="All Admin"
    />

    {/* Booking Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {admins.map((admin) => (
        <div
          key={admin.userId}
          className="relative p-4 bg-n-8 rounded-xl overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-n-9 opacity-30"></div>

          <div className="relative z-10 p-4">
            <h4 className="text-xl font-semibold mb-2 text-n-1">{admin.name}</h4>
            <p className="text-n-3 mb-4">Email: {admin.email}</p>
            <p className="text-n-3 mb-4">Phone: {admin.phone}</p>
            <p className="text-n-3 mb-4">created date: {new Date(admin.regDate).toLocaleDateString()}</p>

            

          </div>
        </div>
      ))}
    </div>
  </div>
  // </Section>
);
};

export default AllAdmin;
