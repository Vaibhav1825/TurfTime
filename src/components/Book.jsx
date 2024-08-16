import React, { useState, useEffect } from "react";
import Section from "./Section";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const [token, setToken] = useState(
    JSON.parse(sessionStorage.getItem("token")) || ""
  );
  let paymentData = {};
  const today = new Date().toISOString().split("T")[0];
  const [message, setMessage] = useState("");
  const [orderID, setOrderID] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coupon: "",
    date: "",
    slot: "",
    sport: "",
    price: "",
  });
  const [couponData, setCouponData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/signin");
    } else {
      const user = JSON.parse(sessionStorage.getItem("User")) || {};
      setFormData((prevData) => ({
        ...prevData,
        name: user.name || "",
        email: user.email || "",
      }));
      fetchCoupons();
    }
  }, [navigate]);

  const fetchCoupons = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        "http://localhost:8080/admin/coupons",
        axiosConfig
      );
      console.log(response.data);

      setCouponData(response.data);
      setMessage(response.data.msg);
    } catch (error) {
      setMessage(error.response?.data?.msg || "Server error");
      console.error("Error fetching coupons:", error);
    }
  };

  const calculatePrice = (sport) => {
    switch (sport) {
      case "FOOTBALL":
        return "2000";
      case "HOCKEY":
        return "1000";
      case "KABADDI":
        return "1000";
      case "CRICKET":
        return "2000";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value.toUpperCase() }));

    if (name === "sport") {
      const price = calculatePrice(value);
      setFormData((prevData) => ({
        ...prevData,
        price: price,
        coupon: "",
        error: "",
      }));
    }

    if (name === "coupon") {
      const matchingCoupon = couponData.find(
        (coupon) => coupon.coupon === value.toUpperCase()
      );

      if (matchingCoupon) {
        const sportPrice = calculatePrice(formData.sport);
        const discountedPrice = sportPrice - matchingCoupon.price;
        setFormData((prevData) => ({
          ...prevData,
          price: discountedPrice.toString(),
        }));
        setError(""); // Clear any previous error
      } else if (value) {
        setError("Invalid coupon");
        setFormData((prevData) => ({
          ...prevData,
          price: calculatePrice(formData.sport),
        }));
      } else {
        setError("");
        setFormData((prevData) => ({
          ...prevData,
          price: calculatePrice(formData.sport),
        }));
      }
    }
  };

  const fetchOrderID = async () => {
    const price = formData.price 
    console.log("order id ", price);
    
    const res = await axios.get(
      `http://localhost:8080/payment/create-booking/${price}`
    );

    setOrderID(res.data.order_id);  
    // handlePayment(res.data.key_id)
    return res.data.key_id;
  };

  const bookingTurf= async()=>{
    // let axiosConfig = {
//     headers: {
//         'Authorization': `Bearer ${token}`
//     }
// };

const matchingCoupon = couponData.find(coupon => coupon.coupon === formData.coupon);
const couponToSend = matchingCoupon ? formData.coupon : '';
console.log(couponToSend)
try {
    
    const response = await axios.post('http://localhost:8080/bookings',
        {
            name: formData.name,
            email: formData.email,
            coupon: couponToSend,
            bookingDate: formData.date,
            slot: formData.slot,
            sport: formData.sport,
            price: formData.price
        }
    );
    setMessage(response.data.msg);
    console.log('Booking successful:', response.data);
    navigate('/thank-you');
} catch (error) {
    setMessage(err.response?.data?.msg || 'Server error');
    console.error('Error booking:', error);
}
  }

  const handlePayment = (keyId) => {
 
  const price = formData.price * 100
   console.log("in payment",price);
   
    const options = {
      key: keyId,
      amount: price,
      currency: "INR",
      name: "turf time",
      description: "Test Transaction",
      order_id: orderID,
      handler: function (response) {
        bookingTurf()
        alert("Payment successful!");
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

//   const verifyPayment = async () => {

//     try{
//         const axiosConfig = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const response = await axios.post(
//           "http://localhost:8080/payment/verify",
//           paymentData,
//           axiosConfig
//         );
//     }catch(err){}
//   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const key_id = await fetchOrderID();
      if (!key_id) return;
      handlePayment(key_id);

    //   verifyPayment();
    } catch (err) {
      setMessage("Error creating booking. Please try again later.");
      return;
    }
  };

  return (
    <>
      <Section crosses>
        <div className="container relative z-2 max-w-[68rem] m-auto lg:flex lg:justify-between">
          <div className="max-w-[32.875rem] mx-auto mb-12 text-center md:mb-16 lg:flex lg:flex-col lg:justify-around lg:max-w-[23.75rem] lg:m-0 lg:text-left">
            <h2 className="h2">Book Your Turf Now</h2>
            <p className="hidden body-2 mt-4 text-n-4 md:block">
            Secure your spot and elevate your game with hassle-free turf booking at Turftime
            </p>
          </div>
          <form
            className="relative max-w-[23.5rem] mx-auto p-0.25 bg-conic-gradient rounded-3xl lg:flex-1 lg:max-w-[27.5rem] lg:m-0 xl:mr-12"
            onSubmit={handleSubmit}
          >
            <div className="px-9 py-10 bg-n-8 rounded-[1.4375rem] lg:px-16 lg:py-[3.25rem]">
              <div className="relative mb-4 lg:mb-5">
                <input
                  className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  readOnly
                />
              </div>
              <div className="relative mb-4 lg:mb-5">
                <input
                  className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                  placeholder="Email"
                  type="text"
                  name="email"
                  value={formData.email}
                  readOnly
                />
              </div>

              <div className="relative mb-4 lg:mb-5">
                <input
                  className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                  placeholder="Date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  required
                />
              </div>
              <div className="relative mb-4 lg:mb-5">
                <select
                  className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                  name="slot"
                  value={formData.slot}
                  onChange={handleChange}
                  required
                >
                  <option className="text-neutral-950" value="" disabled>
                    Select Slot
                  </option>
                  <option className="text-neutral-950" value="MORNING">
                    (6:00 AM - 9:00 AM)
                  </option>
                  <option className="text-neutral-950" value="MORNING1">
                    (9:00 AM - 12:00 Noon)
                  </option>
                  <option className="text-neutral-950" value="AFTERNOON">
                    (12:00 Noon - 3:00 PM)
                  </option>
                  <option className="text-neutral-950" value="EVENING">
                    (4:00 PM - 7:00 PM)
                  </option>
                  <option className="text-neutral-950" value="NIGHT">
                    (7:00 PM - 10:00 PM)
                  </option>
                  <option className="text-neutral-950" value="NIGHT1">
                    (10:00 PM - 1:00 AM)
                  </option>
                </select>
              </div>
              <div className="relative mb-4 lg:mb-5">
                <select
                  className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  required
                >
                  <option className="text-neutral-950" value="" disabled>
                    Select Sport
                  </option>
                  <option className="text-neutral-950" value="FOOTBALL">
                    Football
                  </option>
                  <option className="text-neutral-950" value="HOCKEY">
                    Hockey
                  </option>
                  <option className="text-neutral-950" value="KABADDI">
                    Kabaddi
                  </option>
                  <option className="text-neutral-950" value="CRICKET">
                    Cricket
                  </option>
                </select>
              </div>
              <div className="relative mb-4 lg:mb-5">
                <input
                  className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                  placeholder="Price"
                  type="text"
                  name="price"
                  value={formData.price}
                  readOnly
                />
              </div>
              <div className="relative mb-4 lg:mb-5">
                <input
                  className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                  placeholder="Coupon"
                  type="text"
                  name="coupon"
                  value={formData.coupon}
                  onChange={handleChange}
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xl font-semibold tracking-wide transition-all hover:bg-gradient-to-l"
              >
                Book Now
              </button>
              {message && (
                <div className="mt-6 text-sm text-red-500">{message}</div>
              )}
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};

export default Book;
