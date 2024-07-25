// src/components/HelpPage.js
import React, { useState } from 'react';
import DashboardMenu from './DashboardMenu';
import './HelpPage.css'; // Include your specific styles

const HelpPage = ({ onNewRequest }) => {
    const [form, setForm] = useState({
        location: '',
        urgency: 'low',
        category: 'medical',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewRequest({ ...form, id: Date.now() });
        setForm({
            location: '',
            urgency: 'low',
            category: 'medical',
            description: ''
        });
    };

    return (
        <div className="help-page">
            <DashboardMenu />
            <h1>Request Help</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="urgency">Urgency:</label>
                    <select
                        id="urgency"
                        name="urgency"
                        value={form.urgency}
                        onChange={handleChange}
                    >
                        <option value="high">High</option>
                        <option value="mid">Mid</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                    >
                        <option value="medical">Medical</option>
                        <option value="terrorism">Terrorism</option>
                        <option value="natural_disasters">Natural Disasters</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit Request</button>
            </form>
        </div>
    );
};

export default HelpPage;
