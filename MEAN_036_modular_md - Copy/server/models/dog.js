const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    breed: {
        type: String,
        required: true,
        minlength: 3
    },
    color: {
        type: String,
        required: true,
        minlength: 3
    },
});

const Dog = mongoose.model('Dog', DogSchema);

module.exports = {
    Dog: Dog,
    DogSchema: DogSchema,
}