const { create, all } = require("../controllers/controller.job");
const { validateWithJoi } = require("../middlewares/middleware.validations")
const { schemaJobCreate } = require("../modules/joi/joi.schemas")

const router = require("express").Router();

router.post("/create", validateWithJoi(schemaJobCreate), create);
router.get("/all", all)

module.exports = router;
