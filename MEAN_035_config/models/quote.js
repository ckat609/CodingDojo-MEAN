const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    quote: {
        type: String,
        required: true,
        minlength: 10
    }
});

const Quote = mongoose.model('Quote', QuoteSchema);