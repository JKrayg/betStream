const router = require("express").Router();
debugger
router.route("/", function(res, req) {
    res.render("index")
})
// .post(checkListController.create)

// router.route("/:id")
// .get(checkListController.findById)
// .put(checkListController.update)
// .delete(checkListController.remove)
module.exports = router;