const router = require("express").Router();
const betController = require("../../controllers/betController");

// Matches with "/api/books"
router.route("/")
  .get(betController.findAll)
  .post(betController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(betController.findById)
  .put(betController.update)
  .delete(betController.remove);

module.exports = router;