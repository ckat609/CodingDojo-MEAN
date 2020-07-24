const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name is required."],
        minlength: [2, "The name must be at least 2 characters."]
    }

}, {
    timestamps: true
})

const Author = new mongoose.model('Author', AuthorSchema);

module.exports = {
    Author: Author,
    AuthorSchema: AuthorSchema
}