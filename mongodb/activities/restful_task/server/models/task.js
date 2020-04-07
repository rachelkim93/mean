const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'Task must have title']},
    description: {type: String, default: "", required: [true, 'Task must have a description']},
    completed: {type: Boolean, default: false}
}, {timestamps: true});

mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task')