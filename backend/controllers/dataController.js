const Data = require('../models/Data');
const axios = require('axios');

// Fetch data from API and store in MongoDB
const fetchData = async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        await Data.insertMany(response.data); // Store fetched data in MongoDB
        res.status(200).send('Data fetched and stored successfully!');
    } catch (error) {
        res.status(500).send('Error fetching data: ' + error.message);
    }
};

// Get all data from MongoDB
const getData = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send('Error fetching data: ' + error.message);
    }
};

// Add new data to MongoDB
const createData = async (req, res) => {
    try {
        const newData = new Data(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).send('Error creating data: ' + error.message);
    }
};

// Delete data from MongoDB
const deleteData = async (req, res) => {
    try {
        await Data.findByIdAndDelete(req.params.id);
        res.status(200).send('Data deleted successfully!');
    } catch (error) {
        res.status(500).send('Error deleting data: ' + error.message);
    }
};

module.exports = { fetchData, getData, createData, deleteData };