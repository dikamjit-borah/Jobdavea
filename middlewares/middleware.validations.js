module.exports = {
    validateWithJoi: (schema) => {
        return (req, res, next) => {
            const { error, value } = schema.validate(req.body);
            const valid = error == null;
            if (!valid) {
                return res.send(`Bad request because ${error.details[0].message}`)
            } else {
                next();
            }
        };
    },
}