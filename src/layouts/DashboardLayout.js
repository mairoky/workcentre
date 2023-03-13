import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavBar from '../pages/Dashboard/components/DashboardNavBar/DashboardNavBar';
import SideNavBar from '../pages/Dashboard/components/SideNavBar/SideNavBar';
import './DashboardLayout.css';

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen);
    return (
        <div className='d-flex'>
            <SideNavBar />
            <main style={{ flex: 1 }} className={`content ${sidebarOpen ? 'content-open' : ''}`}>
                <DashboardNavBar
                    toggleSidebar={toggleSidebar} />
                <div className="dashboard-container" style={{ padding: 10 }}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;