const mongoose = require('mongoose');


const QuoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "The quote text is required."],
        minlength: [10, "The quote must be at least 10 characters long."]
    }
}, {
    timestamps: true
});

const Quote = new mongoose.model('Quote', QuoteSchema);

module.exports = {
    Quote: Quote,
    QuoteSchema: QuoteSchema
}