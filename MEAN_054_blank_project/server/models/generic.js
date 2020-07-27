const mongoose = require('mongoose');

const GenericSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minlength: [5, "aVar must be at least 5 characters long."]
    },
    description: {
        type: String,
        required: [true, "Description can't be blank."],
        minlength: [5, "Description must be at least 5 characters long."]
    },
    city: {
        type: String,
        required: [true, "City is required."],
        minlength: [2, "City must be at least 2 characters long."]
    },
    state: {
        type: String,
        required: [true, "State is required."],
        minlength: [2, "State must be 2 characters long."],
        maxlength: [2, "State must be 2 characters long."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
        min: [1, "The minimum value allowed is 1."]
    },
}, {
    timestamps: true
});

const Generic = new mongoose.model('Generic', GenericSchema);