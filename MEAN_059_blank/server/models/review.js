const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minlength: [5, "Title must be at least 5 characters long."]
    },
    text: {
        type: String,
        required: [true, "Content is required."],
        minlength: [2, "Content must be at least 2 characters long."]
    },
    rating: {
        type: Number,
        required: [true, "Rating can't be blank."],
        min: [1, "Rating can't be less than 1."],
        max: [5, "Rating can't be greater than 5."],
    },
}, {
    timestamps: true
});

const Review = new mongoose.model('Review', ReviewSchema);

module.exports = {
    Review: Review,
    ReviewSchema: ReviewSchema
}