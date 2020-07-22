const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        minlength: [5, "The comment must be at least 5 characters."],
        require: [true, "The comment can't be blank."],
    },
    rating: {
        type: Number,
        required: [true, "The rating can't be blank."],
    }
}, {
    timestamps: true
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
    Comment: Comment,
    CommentSchema: CommentSchema
}