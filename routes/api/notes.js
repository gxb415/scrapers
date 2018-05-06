var router = require("express").Router();
var noteController = require("../../controllers/notes.js");

router.get("/:id", noteController.findOne);
router.post("/", noteController.create);
router.delete("/:id", noteController.delete);

module.exports = router;