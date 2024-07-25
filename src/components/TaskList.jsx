// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <strong>{task.location}</strong>: {task.description} ({task.category})
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
