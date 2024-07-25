// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import DashboardMenu from './DashboardMenu';


const HomePage = () => {
    const navigate = useNavigate();

    const navigateToVolunteer = () => {
        navigate('/volunteer');
    };

    const navigateToHelp = () => {
        navigate('/help');
    };

    return (
        <div className="home-page">
            <DashboardMenu />
            <h1>Welcome</h1>
            <button className="big-button" onClick={navigateToVolunteer}>Volunteer</button>
            <button className="big-button" onClick={navigateToHelp}>Ask for Help</button>
        </div>
    );
};

export default HomePage;
