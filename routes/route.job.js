const { create } = require("../controllers/controller.job");

const router = require("express").Router();

router.post("/create", create);

module.exports = router;
