import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainArea from './MainArea';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentView, setCurrentView] = useState('');
    const [name , setName] = useState("")
    const handleNavClick = (view) => {
        setCurrentView(view);
        if (isSidebarOpen) setIsSidebarOpen(false);
    };
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        // const isAdminLogin = sessionStorage.getItem('isAdminLogin');
        // if (!isAdminLogin) {
        //     navigate('/error');
        // }else{
        //     setName(JSON.parse(sessionStorage.getItem('Admin')).name)
        // }
    }, [])

    return (
        <div className="lg:flex lg:h-screen">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} handleNavClick={handleNavClick} />
            <div className="flex-1">
                <Header toggleSidebar={toggleSidebar} Name={name} />
                <MainArea currentView={currentView} />
            </div>
        </div>
    );
};

export default AdminDashboard;
