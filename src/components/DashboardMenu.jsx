// src/components/DashboardMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardMenu.css';

const DashboardMenu = () => {
    return (
        <div className="dashboard-menu">
            <Link to="/home" className="dashboard-menu-item">Home</Link>
            <Link to="/volunteer" className="dashboard-menu-item">Volunteer</Link>
            <Link to="/help" className="dashboard-menu-item">Help</Link>
            <Link to="/profile" className="dashboard-menu-item">Profile</Link>
        </div>
    );
};

export default DashboardMenu;
