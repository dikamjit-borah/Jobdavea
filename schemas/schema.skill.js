const mongoose = require("mongoose");

const schemaSkill = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});

const Skill = mongoose.model("Skills", schemaSkill);

module.exports = { schemaSkill, Skill };