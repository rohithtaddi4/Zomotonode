const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingridients: {
        type: Array,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('item', itemSchema, 'items');   // exporting the model