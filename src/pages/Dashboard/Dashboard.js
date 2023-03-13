import React from 'react';
import Widget from './widget/Widget';
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="widgets">
                <Widget type="users" />
                <Widget type="application" />
                <Widget type="selected" />
                <Widget type="meeting Request" />
            </div>
        </div>
    );
};

export default Dashboard;