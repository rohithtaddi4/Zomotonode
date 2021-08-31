const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const restaurantSchema = new Schema({
    location_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    avg_rating: {
        type: Number,
        required: true
    },
    avg_text: {
        type: String,
        required: true
    },
    min_price: {
        type: Number,
        required: true
    },
    cuisine:{
        type: Array,
        required: true
    }

})

module.exports = mongoose.model('restaurant', restaurantSchema, 'restaurants');   // exporting the model