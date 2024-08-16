import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar ,Name  }) => {

    const navigate = useNavigate();

    const logout = ()=>{
        sessionStorage.removeItem('isAdminLogin')
        sessionStorage.removeItem('Admin')
        sessionStorage.removeItem('token')
        navigate('/')
        
    }
    return (
        <div className="bg-gray-800 text-gray-100 p-4 flex justify-between items-center">
            <button className="lg:hidden" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            <span className="text-lg font-bold">{Name}</span>
            <button type="button" className="p-2 bg-blue-500 text-white rounded"onClick={logout}>logout</button>

        </div>
    );
};

export default Header;
