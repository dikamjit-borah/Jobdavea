const { create, all, apply, submissions, details } = require("../controllers/controller.job");
const { validateWithJoi } = require("../middlewares/middleware.validations")
const { schemaJobCreate, schemaJobApply } = require("../modules/joi/joi.schemas")

const router = require("express").Router();

router.post("/create", validateWithJoi(schemaJobCreate), create);
router.get("/all", all)
router.get("/:id", details)
router.post("/:id/apply", validateWithJoi(schemaJobApply), apply)
router.get("/:id/submissions", submissions)

module.exports = router;
