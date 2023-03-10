const Joi = require("joi");

module.exports = {
    schemaJobCreate: Joi.object({
        title: Joi.string().required(),
        description: Joi.string(),
        created_by: Joi.string().email().required(),
        required_skills: Joi.array().min(1).required(),
        required_experience: Joi.number()
    }),

    schemaJobApply: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        resume: Joi.string(),
        cover_letter: Joi.string()
    })
}