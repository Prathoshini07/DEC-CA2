const express = require('express');
const { fetchData, getData, createData, deleteData } = require('../controllers/dataController');

const router = express.Router();

router.get('/fetch-data', fetchData); // Fetch data from external API
router.get('/data', getData); // Get all data from MongoDB
router.post('/data', createData); // Add new data to MongoDB
router.delete('/data/:id', deleteData); // Delete data from MongoDB

module.exports = router;