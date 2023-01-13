const Joi = require("joi");

module.exports = {
    schemaJobCreate: Joi.object({
        title: Joi.string().required(),
        description: Joi.string(),
        created_by: Joi.string().email().required()
    })
}