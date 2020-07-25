const mongoose = require('mongoose');
const {
    QuoteSchema
} = require('./quotes');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is required."],
        minlength: [3, "The name must be at least 2 characters long."]
    },
    quotes: [{
        text: {
            type: String,
        },
        rating: {
            type: Number,
        }
    }]
})
const Author = new mongoose.model('Author', AuthorSchema);

module.exports = {
    Author: Author,
    AuthorSchema: AuthorSchema
}