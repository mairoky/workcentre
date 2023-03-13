import React from 'react';
import { MdOutlineSearch, MdOutlineList, MdChatBubbleOutline, MdOutlineNotificationsNone, MdOutlineFullscreenExit, MdOutlineDarkMode } from 'react-icons/md';
import Avatar from '../../../../assets/images/team/team-1.jpg';
import { FaBars } from 'react-icons/fa';
import './DashboardNavBar.scss';

const DashboardNavBar = ({ toggleSidebar }) => {
    return (
        <div className='dashboard-navbar'>
            <div className="wrapper">
                <div className='dashboard-menu' onClick={toggleSidebar}>
                    <FaBars className='menu-icon' size={20} style={{ color: '#313131' }} />
                </div>
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <MdOutlineSearch />
                </div>
                <div className="nav-items">
                    <div className="item">
                        <MdOutlineDarkMode className='icon' />
                    </div>
                    <div className="item">
                        <MdOutlineFullscreenExit className='icon' />
                    </div>
                    <div className="item">
                        <MdOutlineNotificationsNone className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <MdChatBubbleOutline className='icon' />
                        <div className="counter">3</div>
                    </div>
                    <div className="item">
                        <MdOutlineList className='icon' />
                    </div>
                    <div className="item">
                        <img src={Avatar} alt="" className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavBar;