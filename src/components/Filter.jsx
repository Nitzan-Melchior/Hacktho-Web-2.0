// src/components/Filter.js
import React, { useState } from 'react';

const Filter = ({ applyFilters }) => {
    const [filters, setFilters] = useState({ location: '', category: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        applyFilters(filters);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Apply Filters</button>
        </form>
    );
};

export default Filter;
