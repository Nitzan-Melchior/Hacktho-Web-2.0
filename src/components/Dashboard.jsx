// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Welcome to the Dashboard</h1>
            <div className="dashboard-buttons">
                <Link to="/home" className="dashboard-button">Home Page</Link>
                <Link to="/help" className="dashboard-button">Help Page</Link>
                <Link to="/volunteer" className="dashboard-button">Volunteer Page</Link>
            </div>
        </div>
    );
};

export default Dashboard;
