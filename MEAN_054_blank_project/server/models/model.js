const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    aVar: {
        type: String,
        required: [true, "aVar is required"],
        minlength: [5, "aVar must be at least 5 characters long."]
    },
});

const Model = new mongoose.model('Model', ModelSchema);