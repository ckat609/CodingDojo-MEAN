const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minlength: [5, "Title must be at least 5 characters long."]
    },
    description: {
        type: String,
        required: [true, "Description can't be blank."],
        minlength: [5, "Description must be at least 5 characters long."]
    },
    location: {
        type: String,
        required: [true, "Location is required."],
        minlength: [2, "Location must be at least 2 characters long."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
        min: [1, "The minimum value allowed is 1."]
    },
    image: {
        type: String,
        required: [true, "Price is required."],
        min: [9, "The minimum value allowed is 1."]
    },
}, {
    timestamps: true
});

const Bike = new mongoose.model('Bike', BikeSchema);

module.exports = {
    Bike: Bike,
    BikeSchema: BikeSchema
}