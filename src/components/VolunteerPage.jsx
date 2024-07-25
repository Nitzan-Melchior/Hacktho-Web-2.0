// src/components/VolunteerPage.js
import React, { useState, useEffect } from 'react';
import DashboardMenu from './DashboardMenu';
import Filter from './Filter';
import './VolunteerPage.css';

const VolunteerPage = ({ tasks }) => {
    const [filters, setFilters] = useState({ location: '', category: '' });
    const [locations, setLocations] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Extract unique locations and categories from tasks
        const uniqueLocations = [...new Set(tasks.map(task => task.location))];
        const uniqueCategories = [...new Set(tasks.map(task => task.category))];
        
        setLocations(uniqueLocations);
        setCategories(uniqueCategories);
    }, [tasks]);

    const applyFilters = (filters) => {
        setFilters(filters);
    };

    const filteredTasks = tasks.filter(task => {
        return (
            (filters.location === '' || task.location === filters.location) &&
            (filters.category === '' || task.category === filters.category)
        );
    });

    return (
        <div className="volunteer-page">
            <DashboardMenu />
            <h1>Available Tasks</h1>
            <Filter
                applyFilters={applyFilters}
                locations={locations}
                categories={categories}
            />
            <div className="task-list">
                {filteredTasks.length > 0 ? (
                    filteredTasks.map(task => (
                        <div key={task.id} className="task-item">
                            <p><strong>Location:</strong> {task.location}</p>
                            <p><strong>Description:</strong> {task.description}</p>
                            <p><strong>Category:</strong> {task.category}</p>
                        </div>
                    ))
                ) : (
                    <p>No tasks available.</p>
                )}
            </div>
        </div>
    );
};

export default VolunteerPage;
