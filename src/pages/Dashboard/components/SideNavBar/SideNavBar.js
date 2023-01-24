import React from 'react';
import { MdDashboard, MdDesignServices, MdSettings, MdMessage, MdVideoCall, MdLogout, MdList, MdChecklist, MdPersonPin } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import './SideNavBar.scss';

const SideNavBar = () => {
    return (
        <div className="sidenavbar">
            <div className="top">
                <span className='logo'>WorkCentre</span>
            </div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <MdDashboard className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <FaUser className='icon' />
                        <span>Users</span>
                    </li>
                    <li>
                        <MdSettings className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">WORK</p>
                    <li>
                        <MdDesignServices className='icon' />
                        <span>Services</span>
                    </li>
                    <li>
                        <MdList className='icon' />
                        <span>Application</span>
                    </li>
                    <li>
                        <MdChecklist className='icon' />
                        <span>Selected</span>
                    </li>
                    <p className="title">CONTACT</p>
                    <li>
                        <MdMessage className='icon' />
                        <span>Message</span>
                    </li>
                    <li>
                        <MdVideoCall className='icon' />
                        <span>Meeting Request</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <MdPersonPin className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <MdLogout className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default SideNavBar;