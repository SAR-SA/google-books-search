const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.save);

router.route("/books")
  .get(booksController.findAll)
  .post(booksController.save);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(booksController.findOne)
  // .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
