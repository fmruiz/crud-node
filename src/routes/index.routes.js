const express = require("express");
const Task = require('../models/Task')

// initialize router
const router = express.Router();

// routes GET
router.get("/", (req, res) => {
  res.render('index.hbs')
});

router.get("/edit", (req, res) => {
  res.render('edit.hbs')
});

router.get("/about", (req, res) => {
  res.render('about.hbs')
});

// routes POST
router.post('/tasks/add', (req,res) => {
  const task = Task(req.body);
  console.log(task)
  res.send('added')
})

// export router
module.exports = router;