const mongoose = require("mongoose");
const { schemaSkill } = require("../schemas/schema.skill")
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
    },
    required_skills: {
        type: [schemaSkill],
        required: true
    },
    required_experience:{
        type: Number,
    },
    submissions: {
        type: [
            {
                submitted_on: {
                    type: Date,
                    required: true
                },
                candidate_details: {
                    name: {
                        type: String,
                        required: true
                    },
                    email: {
                        type: String,
                        required: true
                    },
                    resume: {
                        type: String,
                        required: true
                    }
                },
            }
        ]
    }

});

const Job = mongoose.model("Jobs", schemaJob);

module.exports = Job;