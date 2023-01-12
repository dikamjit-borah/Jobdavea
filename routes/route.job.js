const router = require("express").Router();

router.get("/create", (req, res) =>
    res.send("job created"));

module.exports = router;
