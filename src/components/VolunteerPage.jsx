// src/components/VolunteerPage.js
import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import TaskLog from './TaskLog';
import './VolunteerPage.css';

const VolunteerPage = () => {
    const [tasks, setTasks] = useState([
        { id: 1, location: 'New York', description: 'Help at the food bank', category: 'Community Service', urgency: 'High' },
        { id: 2, location: 'Los Angeles', description: 'Medical assistance', category: 'Medical', urgency: 'Low' },
        // Add more tasks as needed
    ]);

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
            (!filters.location || task.location === filters.location) &&
            (!filters.category || task.category === filters.category)
        );
    });

    const handleDeleteTasks = (taskIds) => {
        setTasks(prevTasks => prevTasks.filter(task => !taskIds.includes(task.id)));
    };

    const handleAssignTask = (taskId) => {
        // Implement your logic for assigning a task
        console.log(`Task ${taskId} assigned.`);
    };

    return (
        <div className="volunteer-page">
            <h1>Available Tasks</h1>
            <Filter
                applyFilters={applyFilters}
                locations={locations}
                categories={categories}
            />
            <TaskLog
                tasks={filteredTasks}
                onTaskDelete={handleDeleteTasks}
                onTaskAssign={handleAssignTask}
            />
        </div>
    );
};

export default VolunteerPage;
