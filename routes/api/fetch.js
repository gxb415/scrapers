var router = require("express").Router();
var fetchController = require("../../controllers/fetch.js");

router.get("/", fetchController.scrapeHeadlines);

module.exports = router;