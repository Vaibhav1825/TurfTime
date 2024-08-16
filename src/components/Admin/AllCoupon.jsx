import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Section from '../Section';
import Heading from '../Heading';

const AllCoupon = () => {
  const [coupons, setCoupons] = useState([]);
  // const [token, setToken] = useState(JSON.parse(sessionStorage.getItem('token')))


  // console.log(token);


  const fetchCoupons = async () => {
    try {
      // let axiosConfig = {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // };
      const response = await axios.get('http://localhost:8080/admin/coupons');
      console.log(response.data);
      
      setCoupons(response.data);
    } catch (error) {
      console.error('Error fetching coupons:', error);
    }

  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleCancel = async (couponId) => {
    try {
      // const axiosConfig = {
      //   headers: {
      //     'Authorization': `Bearer ${token}`,
      //   },
      // };

      const confirmation = window.confirm(
        "Are you sure you want to delete this coupon?"
      );
      if (!confirmation) return;

      const response = await axios.delete(`http://localhost:8080/admin/coupons/${couponId}`);
      console.log(response);

      if (response.status === 200) {

        
        setCoupons(prevCoupons=>prevCoupons.filter(coupon => coupon.cid!=couponId))
        console.log(`coupon with ID: ${couponId} has been deleted.`);
      }
    } catch (error) {
      console.error('Error deleteing coupon:', error);
    }
  };

  return (
    
    <div className="container">
      <Heading
        title="All Coupons"
      />

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {coupons.map((coupon) => (
          <div
            key={coupon._id}
            className="relative p-4 bg-n-8 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-n-9 opacity-30"></div>

            <div className="relative z-10 p-4">
              <h4 className="text-xl font-semibold mb-2 text-n-1">{coupon.coupon}</h4>
              <p className="text-n-3 mb-4">Price: ${coupon.price}</p>
              <p className="text-n-3 mb-4">expiry date: {new Date(coupon.expireDate).toLocaleDateString()}</p>

              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => handleCancel(coupon.cid)}
              >
                remove coupon
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
    // </Section>
  );
};

export default AllCoupon;
