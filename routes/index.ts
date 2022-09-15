
const router = require("express").Router();
const softooController = require("../controllers/softooController");

router.use("/softoo",softooController);



module.exports = router;
