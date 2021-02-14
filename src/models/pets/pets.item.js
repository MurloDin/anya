const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    age: {
        type: String,
    },
    inoculations: {
        type: String,
    },
    diseases: {
        type: String,
    },
    parasites: {
        type: String,
    },
    desc: {
        type: String,
    },
    photoLocation: {
        type: String,
    }
});

module.exports = mongoose.model('Food', foodSchema)
