import React from 'react';
import Widget from './widget/Widget';
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="widgets">
                <Widget />
                <Widget />
                <Widget />
                <Widget />
            </div>

        </div>
    );
};

export default Dashboard;