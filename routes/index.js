const { Router } = require("express");
const router = Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.use("/weather", require("./weather"));

router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
