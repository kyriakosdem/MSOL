var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Succesfully executed testAPI from expressjs.");
});

module.exports = router;