const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
mongoose.connect('mongodb://localhost/tasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [5, "Title length must be at least 5 characters"],
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        minlength: [5, "Description length must be at least 5 characters"],
        required: [true, "description is required"],
        default: "",
    },
    completed: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

const Task = new mongoose.model('Task', TaskSchema);




app.get('/tasks', (req, res) => {
    Task.find()
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => res.json(err))
});

app.get('/tasks/:id', (req, res) => {
    Task.findOne({
            _id: req.params.id
        })
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => res.json(err))
});

app.post('/tasks', (req, res) => {
    Task.create(req.body)
        .then(data => {
            res.redirect('/');
        })
        .catch(err => res.json(err))
});

app.put('/tasks/:id', (req, res) => {
    Task.update(req.params.id, req.body)
        .then(data => {
            res.redirect('/');
        })
        .catch(err => res.json(err))
});

app.delete('/tasks/:id', (req, res) => {
    Task.remove(req.params.id)
        .then(data => {
            res.redirect('/');
        })
        .catch(err => res.json(err))
});

app.listen(8000, () => console.log("Listening on 8000"));