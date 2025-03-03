import React, { useState } from 'react';

const DataForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ title: '', body: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ title: '', body: '' }); // Clear the form
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
            <input
                type="text"
                name="body"
                value={formData.body}
                onChange={handleChange}
                placeholder="Body"
                required
            />
            <button type="submit">Add Data</button>
        </form>
    );
};

export default DataForm;