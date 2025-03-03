import React, { useState, useEffect } from 'react';
import { fetchData, getData, createData, deleteData } from './services/api';
import DataList from './components/DataList';
import DataForm from './components/DataForm';

const App = () => {
    const [data, setData] = useState([]);

    // Fetch data on component mount
    useEffect(() => {
        getData()
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Add new data
    const handleCreate = (newData) => {
        createData(newData)
            .then(response => setData([...data, response.data]))
            .catch(error => console.error('Error creating data:', error));
    };

    // Delete data
    const handleDelete = (id) => {
        deleteData(id)
            .then(() => {
                setData(data.filter(item => item._id !== id));
            })
            .catch(error => console.error('Error deleting data:', error));
    };

    return (
        <div>
            <h1>MERN CRUD App</h1>
            <DataForm onSubmit={handleCreate} />
            <DataList data={data} onDelete={handleDelete} />
        </div>
    );
};

export default App;