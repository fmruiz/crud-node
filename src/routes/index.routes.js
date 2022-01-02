const express = require("express");

// initialize router
const router = express.Router();

// routes
router.get("/", (req, res) => {
  res.render('index.hbs')
});

router.get("/edit", (req, res) => {
  res.render('edit.hbs')
});

router.get("/about", (req, res) => {
  res.render('about.hbs')
});

// export router
module.exports = router;