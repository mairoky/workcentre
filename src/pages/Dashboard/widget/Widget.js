import React from 'react';
import { MdKeyboardArrowUp, MdPersonOutline } from 'react-icons/md';
import './Widget.scss';

const Widget = ({ type }) => {
    console.log(type);
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">568</span>
                <span className="link">See All</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <MdKeyboardArrowUp />
                    20%
                </div>
                <MdPersonOutline className='icon' />
            </div>
        </div>
    );
};

export default Widget;