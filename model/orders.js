const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const ordersSchema = new Schema({

    placedByUserID: {
        type: String,
        required: true
    },
 /*   placedOn: {
        type: String,
        required: true
    },
    restaurantId: {
        type: String,
    },*/
    items: {
        type: Array,
        required: true
    }, 
    amount: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('order', ordersSchema, 'orders');   // exporting the model