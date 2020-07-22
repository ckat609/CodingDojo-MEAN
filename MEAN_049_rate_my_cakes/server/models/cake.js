const mongoose = require('mongoose');
const {
    CommentSchema
} = require('./comment');

// const CommentSchema = new mongoose.Schema({
//     comment: {
//         type: String,
//         minlength: [5, "The comment must be at least 5 characters."],
//         require: [true, "The comment can't be blank."],
//     },
//     rating: {
//         type: Number,
//         required: [true, "The rating can't be blank."],
//     }
// }, {
//     timestamps: true
// });

// const Comment = mongoose.model('Comment', CommentSchema);


const CakeSchema = new mongoose.Schema({
    baker: {
        type: String,
        minlength: [1, "The baker's name must be at least 5 characters."],
        required: [true, "The baker's name can't be blank"],
    },
    image: {
        type: String,
        minlength: [7, "Image url is not valid."],
        required: [true, "The image url can't be blank"],
    },
    comments: [CommentSchema],
}, {
    timestamps: true,
});

const Cake = mongoose.model('Cake', CakeSchema);

module.exports = {
    Cake: Cake,
    CakeSchema: CakeSchema,
    // Comment: Comment,
    // CommentSchema: CommentSchema
}