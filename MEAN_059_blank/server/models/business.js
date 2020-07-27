const mongoose = require('mongoose');
const {
    ReviewSchema
} = require('./review');

const BusinessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [5, "Name must be at least 5 characters long."]
    },
    address: {
        type: String,
        required: [true, "City is required."],
        minlength: [2, "City must be at least 2 characters long."]
    },
    description: {
        type: String,
        required: [true, "Description can't be blank."],
        minlength: [5, "Description must be at least 5 characters long."]
    },
    reviews: [ReviewSchema]
}, {
    timestamps: true
});

const Business = new mongoose.model('Business', BusinessSchema);

module.exports = {
    Business: Business,
    BusinessSchema: BusinessSchema
}