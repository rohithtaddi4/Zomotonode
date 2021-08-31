const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const LocationSchema = new Schema({
    location_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    city_id: {
        type: String,
        required: true
    },
    country_name: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('Location', LocationSchema, 'Locations');   // exporting the model