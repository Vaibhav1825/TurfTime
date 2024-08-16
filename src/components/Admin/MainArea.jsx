import React from 'react';
import {Allturf , TurfForm , AddAdmin , AddCoupon , AllAdmin , AllCoupon} from './index'
import TodayBooking from './TodayBookings';
import AllBookings from './AllBookings';

const MainArea = ({currentView}) => {
    return (
        <div className="flex-1 p-7 overflow-y-auto h-4/5">

            {currentView === 'addTurf' && <TurfForm />}
            {currentView === 'allTurf' && <Allturf />}
            {currentView === 'addCoupon' && <AddCoupon />}
            {currentView === 'allCoupon' && <AllCoupon />}
            {currentView === 'addAdmin' && <AddAdmin />}
            {currentView === 'allAdmin' && <AllAdmin />}
            {currentView === 'allBookings' && <AllBookings/>}
            {currentView === '' && <TodayBooking/>}
            {currentView === 'todayBookings' && <TodayBooking/>}
            

        </div>
    );
};

export default MainArea;
