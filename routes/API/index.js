const router = require("express").Router();
const betRoutes = require("./bet");

router.use("/bet", betRoutes);

module.exports = router;