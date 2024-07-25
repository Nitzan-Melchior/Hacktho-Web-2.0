// src/components/TaskLog.js
import React, { useState } from 'react';
import './TaskLog.css';

const TaskLog = ({ tasks, onTaskDelete, onTaskAssign }) => {
    const [selectedTasks, setSelectedTasks] = useState([]);

    const handleSelectTask = (taskId) => {
        setSelectedTasks(prevState => 
            prevState.includes(taskId) 
                ? prevState.filter(id => id !== taskId) 
                : [...prevState, taskId]
        );
    };

    const handleDeleteSelectedTasks = () => {
        onTaskDelete(selectedTasks);
        setSelectedTasks([]);
    };

    const handleAssignTask = (taskId) => {
        onTaskAssign(taskId);
    };

    return (
        <div className="task-log">
            <h1>Task Log</h1>
            <button 
                className="delete-button"
                onClick={handleDeleteSelectedTasks}
                disabled={selectedTasks.length === 0}
            >
                Delete Selected Tasks
            </button>
            <div className="task-list">
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <div 
                            key={task.id} 
                            className={`task-item ${selectedTasks.includes(task.id) ? 'selected' : ''}`}                        >
                            <p><strong>Location:</strong> {task.location}</p>
                            <p><strong>Description:</strong> {task.description}</p>
                            <p><strong>Category:</strong> {task.category}</p>
                            <button className ="assign-button" onClick={(e) => {e.stopPropagation(); handleAssignTask(task.id); }}>
                                Assign
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No tasks available.</p>
                )}
            </div>
        </div>
    );
};

export default TaskLog;
