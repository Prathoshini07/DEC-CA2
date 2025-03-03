const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    id: Number,
    title: String,
    body: String,
});

module.exports = mongoose.model('Data', DataSchema);