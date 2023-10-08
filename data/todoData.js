const mongoose = require("mongoose");

const todo = new mongoose.Schema({
    title: String,
    description: String
});

module.exports = mongoose.model("todoData", todo);