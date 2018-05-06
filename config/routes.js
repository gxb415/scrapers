var scrape = require("../scripts/scrape");

var headlinesController = require("../../controllers/headline");
var notesController = require("../../controllers/note");

var router = require("express").Router();
// This route renders the homepage
router.get("/", function(req, res) {
    res.render("home");
});

// This route renders the saved handledbars page
router.get("/saved", function(req, res) {
    res.render("saved");
});
router.get("/api/fetch", function(req, res) {
    headlinesController.fetch(function(err, docs) {
        if (!docs || docs.exportsinsertedCount === 0) {
            res.json({
                message: "No new articles today. Check back tomorrow!"
            });
        } else {
            res.json({
                message: "Added " + docs.insertedCount + " new articles!"
            });
        }
    });
});

router.get("/", headlinesController.findAll);
router.delete("/:id", headlinesController.delete);
router.put("/:id", headlinesController.update);

router.get("/:id", notesController.findOne);
router.post("/", notesController.create);
router.delete("/:id", notesController.delete);


module.exports = router;