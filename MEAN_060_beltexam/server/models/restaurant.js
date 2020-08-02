const mongoose = require('mongoose');
const {
    ReviewSchema
} = require('./review');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [3, "Name must be at least 3 characters long."],
        unique: [true, "That name is already taken."]
    },
    cuisine: {
        type: String,
        required: [true, "Cuisine is required."],
        minlength: [3, "Cuisine must be at least 3 characters long."]
    },
    description: {
        type: String,
        required: [true, "Description can't be blank."],
        minlength: [5, "Description must be at least 5 characters long."]
    },
    revcount: {
        type: Number,
        default: 0
    },
    totalstars: {
        type: Number,
        default: 0
    },
    reviews: [ReviewSchema]
}, {
    timestamps: true
});

const Restaurant = new mongoose.model('Restaurant', RestaurantSchema);

module.exports = {
    Restaurant: Restaurant,
    RestaurantSchema: RestaurantSchema
}