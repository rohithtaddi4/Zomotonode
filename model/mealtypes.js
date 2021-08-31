const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const mealtypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    meal_type: {
        type: Number,
        required: true
    }
    
})

module.exports = mongoose.model('mealtype', mealtypeSchema, 'mealtypes');   // exporting the model