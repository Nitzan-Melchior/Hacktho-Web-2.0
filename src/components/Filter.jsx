// src/components/Filter.js
import React, { useState } from 'react';
import './Filter.css'; // Include CSS for styling if needed

const Filter = ({ applyFilters, locations, categories }) => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleApplyFilters = () => {
        applyFilters({
            location: selectedLocation,
            category: selectedCategory
        });
    };

    return (
        <div className="filter-container">
            <div className="filter-group">
                <label htmlFor="location">Location:</label>
                <select
                    id="location"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                    ))}
                </select>
            </div>
            <div className="filter-group">
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <button type="button" onClick={handleApplyFilters}>Apply Filters</button>
        </div>
    );
};

export default Filter;
