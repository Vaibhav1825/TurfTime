import React, { useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar , handleNavClick}) => {
    const [isTurfOpen, setIsTurfOpen] = useState(false);
    const [isCouponOpen, setIsCouponOpen] = useState(false);
    const [isAdminOpen, setIsAdminOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div
            className={`fixed z-50 top-0 left-0 w-64 bg-gray-800 text-gray-100 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:top-0 lg:w-64 h-full`}
        >
            <div className="flex justify-between p-4 font-bold text-lg">
                <span>Admin Dashboard</span>
                <button className="lg:hidden" onClick={toggleSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <ul className="mt-4">
                <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer" onClick={() => setIsTurfOpen(!isTurfOpen)}>
                    Turfs
                    <ul className={`${isTurfOpen ? 'block' : 'hidden'} ml-4 mt-2`}>
                        <li className="py-1 px-2 hover:bg-gray-700 cursor-pointer"onClick={() => handleNavClick('allTurf')}>All Turfs</li>
                        <li className="py-1 px-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleNavClick('addTurf')}>Add Turf</li>
                    </ul>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer" onClick={() => setIsCouponOpen(!isCouponOpen)}>
                    Coupons
                    <ul className={`${isCouponOpen ? 'block' : 'hidden'} ml-4 mt-2`}>
                        <li className="py-1 px-2 hover:bg-gray-700 cursor-pointer"onClick={() => handleNavClick('allCoupon')}>All Coupons</li>
                        <li className="py-1 px-2 hover:bg-gray-700 cursor-pointer"onClick={() => handleNavClick('addCoupon')}>Add Coupon</li>
                    </ul>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer" onClick={() => setIsAdminOpen(!isAdminOpen)}>
                    Admins
                    <ul className={`${isAdminOpen ? 'block' : 'hidden'} ml-4 mt-2`}>
                        <li className="py-1 px-2 hover:bg-gray-700 cursor-pointer"onClick={() => handleNavClick('allAdmin')}>All Admins</li>
                        <li className="py-1 px-2 hover:bg-gray-700 cursor-pointer"onClick={() => handleNavClick('addAdmin')}>Add Admin</li>
                    </ul>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer" onClick={() => setIsBookingOpen(!isBookingOpen)}>
                    Bookings
                    <ul className={`${isBookingOpen ? 'block' : 'hidden'} ml-4 mt-2`}>
                        <li className="py-1 px-2 hover:bg-gray-700 cursor-pointer"onClick={() => handleNavClick('allBookings')}>All Bookings</li>
                        <li className="py-1 px-2 hover:bg-gray-700 cursor-pointer"onClick={() => handleNavClick('todayBookings')}>today bookings</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
