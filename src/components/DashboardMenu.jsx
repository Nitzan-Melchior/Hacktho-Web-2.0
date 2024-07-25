// src/components/DashboardMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardMenu.css';

const DashboardMenu = () => {
    return (
        <nav className="dashboard-menu">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/task-log">Task Log</Link></li>
            </ul>
        </nav>
    );
};

export default DashboardMenu;
