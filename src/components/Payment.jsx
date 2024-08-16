import React, { useState } from 'react';
import axios from 'axios';
function Payment() {
    const [orderID, setOrderID] = useState('');

    const fetchOrderID = async () => {
        const res = await axios.get(`http://localhost:8080/payment/create-booking/${1}`);
      
        console.log(res.data);
        setOrderID(res.data.order_id);
        handlePayment(res.data.key_id)
    };

    const handlePayment = (keyId) => {
        const options = {
            key: keyId, // Enter the Key ID generated from the Razorpay Dashboard
            amount: 100, // Amount in paise
            currency: 'INR',
            name: 'turf time',
            description: 'Test Transaction',
            order_id: orderID, // Order ID from backend
            handler: function (response) {
               const paymentData={
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature,
               }
                console.log(response);
                console.log(paymentData);
                alert('Payment successful!');
             
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#3399cc'
            }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div>
            <button onClick={fetchOrderID}>Fetch Order ID</button>
            {/* <button onClick={handlePayment} disabled={!orderID}> */}
                {/* Pay Now */}
            {/* </button> */}
        </div>
    );
}

export default Payment;






// e.preventDefault();
// // let axiosConfig = {
// //     headers: {
// //         'Authorization': `Bearer ${token}`
// //     }
// // };

// const matchingCoupon = couponData.find(coupon => coupon.coupon === formData.coupon);
// const couponToSend = matchingCoupon ? formData.coupon : '';
// console.log(couponToSend)
// try {
    
//     const response = await axios.post('http://localhost:8080/bookings',
//         {
//             name: formData.name,
//             email: formData.email,
//             coupon: couponToSend,
//             bookingDate: formData.date,
//             slot: formData.slot,
//             sport: formData.sport,
//             price: formData.price
//         }
//     );
//     setMessage(response.data.msg);
//     console.log('Booking successful:', response.data);
//     navigate('/thank-you');
// } catch (error) {
//     setMessage(err.response?.data?.msg || 'Server error');
//     console.error('Error booking:', error);
// }



// import React from 'react'

// const Payment = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Payment
