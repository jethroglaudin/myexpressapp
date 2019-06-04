const express = require("express");
const router = express.Router();
const User = require("../models/User");

// app.get('/', (req, res) => res.send('Bonjour, Jethro!'))

router.get("/", (req, res) => {
  res.send(`API route is working`);
});

router.post("/", (req, res) => {
  //request can send over queries, paramaters, Json, files..
  //usually you are sending out queries and params
  const userName = req.body.username;
  const message = req.body.message;
  const data = {
    username: userName,
    message: message
  };
  console.log(data);
  const user = new User(data);
  user.save().then(() => {
    console.log(`New user created`);
    res.send(data);
  });
});

router.get("/getallusers", (req, res) => {
  User.find().then(results => {
    console.log(results);
    res.send(results);
  });
});

router.get("/showprofile/:username", (req, res) => {
  const username = req.params.username;
  User.find({ username })
    .then(data => {
      if (!data.length) {
        res.send(`Username was not found`);
      }
      res.send(data);
    })
    .catch(err => console.log(err));
});

module.exports = router;
