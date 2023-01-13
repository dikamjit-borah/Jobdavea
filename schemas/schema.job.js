const mongoose = require("mongoose");

const schemaJob = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    created_by: {
        type: String,
        required: true,
    }
});

const Job = mongoose.model("Jobs", schemaJob);

module.exports = Job;