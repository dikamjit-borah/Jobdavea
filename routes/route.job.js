const { create, all, apply, submissions } = require("../controllers/controller.job");
const { validateWithJoi } = require("../middlewares/middleware.validations")
const { schemaJobCreate } = require("../modules/joi/joi.schemas")

const router = require("express").Router();

router.post("/create", validateWithJoi(schemaJobCreate), create);
router.get("/all", all)
router.post("/:id/apply", apply)
router.get("/:id/submissions", submissions)

module.exports = router;
