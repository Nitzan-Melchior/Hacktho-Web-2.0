// src/components/DashboardMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardMenu.css';

const DashboardMenu = () => {
    return (
        <nav className="dashboard-menu">
            <Link to="/home" className="menu-item">Home Page</Link>
            <Link to="/help" className="menu-item">Help Page</Link>
            <Link to="/volunteer" className="menu-item">Volunteer Page</Link>
            <Link to="/dashboard" className="menu-item">Dashboard</Link>
        </nav>
    );
};

export default DashboardMenu;
