const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "The note's text is required"],
        minlength: [5, "The note must be at least 5 characters long."]
    },
}, {
    timestamps: true
});

const Note = new mongoose.model('Note', NoteSchema);

module.exports = {
    Note: Note,
    NoteSchema: NoteSchema
}