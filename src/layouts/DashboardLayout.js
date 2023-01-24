import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavBar from '../pages/Dashboard/components/DashboardNavBar/DashboardNavBar';
import SideNavBar from '../pages/Dashboard/components/SideNavBar/SideNavBar';

const DashboardLayout = () => {
    return (
        <div className='d-flex'>
            <SideNavBar />
            <main style={{ flex: 6 }}>
                <DashboardNavBar />
                <div className="dashboard-container" style={{ padding: 10 }}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;