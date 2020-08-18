const { Router } = require("express");
const router = Router();
const weatherDAO = require("../daos/weather");

router.post("/", async (req, res, next) => {
  const { name, temperature } = req.body;
  const weather = await weatherDAO.create(name, temperature);
  if (weather) {
    res.redirect("/weather");
  } else {
    res.sendStatus(401);
  }
});

router.get("/", async (req, res, next) => {
  res.render("weather");
});
router.get("/location", async (req, res, next) => {
  const name = req.query.name;
  if (!name) {
    res.redirect("/weather");
  }
  const location = name ? await weatherDAO.getLocation(name) : false;

  if (location) {
    res.render("location", {
      place: location.name,
      temperature: location.temperature,
    });
  } else {
    res.status(404).render("unavailable", { name: name });
  }
});

module.exports = router;
