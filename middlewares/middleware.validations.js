const { sendError } = require("../utils/response.handler");

module.exports = {
    validateWithJoi: (schema) => {
        return (req, res, next) => {
            const { error, value } = schema.validate(req.body);
            const valid = error == null;
            if (!valid) {
                return sendError(res, error.details[0], "Bad Request", 400)
            } else {
                next();
            }
        };
    },
}