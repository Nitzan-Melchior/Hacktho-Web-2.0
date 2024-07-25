// src/components/Profile.js
import React from 'react';
import DashboardMenu from './DashboardMenu';
import './Profile.css';

const Profile = ({ name, location, profession, contact }) => {
    return (
        <div className="profile-container">
            <DashboardMenu />
            <h1 className="profile-header">Profile</h1>
            <div className="profile-detail">
                <label className="profile-label">Name:</label>
                <p className="profile-info">{name}</p>
            </div>
            <div className="profile-detail">
                <label className="profile-label">Location:</label>
                <p className="profile-info">{location}</p>
            </div>
            <div className="profile-detail">
                <label className="profile-label">Profession/Category:</label>
                <p className="profile-info">{profession}</p>
            </div>
            <div className="profile-detail">
                <label className="profile-label">Contact Information:</label>
                <p className="profile-info">{contact}</p>
            </div>
        </div>
    );
};

export default Profile;
