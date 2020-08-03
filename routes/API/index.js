const router = require("express").Router();
const api = require("./api");

router.use("/bet", api);

module.exports = router;