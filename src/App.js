

// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import VolunteerPage from './components/VolunteerPage';
import HelpPage from './components/HelpPage';
import Profile from './components/Profile';
import TaskLog from './components/TaskLog';
import DashboardMenu from './components/DashboardMenu';
import './App.css';  // Add this to ensure styling is applied

const defaultTasks = [
    { id: 1, location: 'New York', description: 'Help at the food bank', category: 'Community Service', urgency: 'High' },
    { id: 2, location: 'Los Angeles', description: 'Medical assistance', category: 'Medical', urgency: 'Low' },
    // Add more tasks as needed
];

const App = () => {
    const [tasks, setTasks] = useState(defaultTasks);
    const onNewRequest = (task) => {
      setTasks(prevTasks => [...prevTasks, task]);
  };

    const handleDeleteTasks = (taskIds) => {
        setTasks(prevTasks => prevTasks.filter(task => !taskIds.includes(task.id)));
    };

    const handleAssignTask = (taskId) => {
        // Implement your logic for assigning a task
        console.log(`Task ${taskId} assigned.`);
    };

    return (
        <div className="app">
            <BrowserRouter>
                <DashboardMenu />
                <Routes>
                    <Route path="/" exact element={<LoginForm />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/volunteer" element={<VolunteerPage tasks={tasks} />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/task-log" element={<TaskLog tasks={tasks} onTaskDelete={handleDeleteTasks} onTaskAssign={handleAssignTask} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
