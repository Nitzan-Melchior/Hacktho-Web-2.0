// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import VolunteerPage from './components/VolunteerPage';
import HelpPage from './components/HelpPage';
import Dashboard from './components/Dashboard';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const onNewRequest = (task) => {
        setTasks(prevTasks => [...prevTasks, task]);
    };

    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<LoginForm />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/volunteer" element={<VolunteerPage tasks={tasks} />} />
                    <Route path="/help" element={<HelpPage onNewRequest={onNewRequest} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
