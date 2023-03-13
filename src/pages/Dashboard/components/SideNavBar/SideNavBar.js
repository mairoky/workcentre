import React from 'react';
import { MdDashboard, MdDesignServices, MdSettings, MdMessage, MdVideoCall, MdLogout, MdList, MdChecklist, MdPersonPin } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import './SideNavBar.scss';
import { Link } from 'react-router-dom';

const SideNavBar = () => {
    return (
        <div className='sidenavbar'>
            <div className="top">
                <span className='logo'>WorkCentre</span>
            </div>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <MdDashboard className='icon' />
                        <Link to='/dashboard'><span>Dashboard</span></Link>
                    </li>
                    <li>
                        <FaUser className='icon' />
                        <Link to='/dashboard/all-users'><span>Users</span></Link>
                    </li>
                    <li>
                        <MdSettings className='icon' />
                        <Link to='/dashboard/settings'><span>Settings</span></Link>
                    </li>
                    <p className="title">WORK</p>
                    <li>
                        <MdDesignServices className='icon' />
                        <Link to='/dashboard/services'><span>Services</span></Link>
                    </li>
                    <li>
                        <MdList className='icon' />
                        <Link to='/dashboard/all-application'><span>Application</span></Link>

                    </li>
                    <li>
                        <MdChecklist className='icon' />
                        <Link to='/dashboard/selected-candidate'><span>Selected</span></Link>

                    </li>
                    <p className="title">CONTACT</p>
                    <li>
                        <MdMessage className='icon' />
                        <Link to='/dashboard/message'><span>Message</span></Link>

                    </li>
                    <li>
                        <MdVideoCall className='icon' />
                        <Link to='/dashboard/meeting-request'><span>Meeting Request</span></Link>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <MdPersonPin className='icon' />
                        <Link to='/dashboard/profile'><span>Profile</span></Link>

                    </li>
                    <li>
                        <MdLogout className='icon' />
                        <Link><span>Logout</span></Link>

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