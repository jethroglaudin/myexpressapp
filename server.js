const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./keys");
const User = require("./models/User");
const api = require('./routes/api')
const app = express();
const port = process.env.Port || 4000;
app.use(express.static("public"));
// same as app.use("/", express.static("public"));
app.use(bodyParser.json());
//connecting mongoDB or in this case mongoDB Atlas
mongoose.Promise = global.Promise;
mongoose
  .connect(keys.mongoDBUrl, { useNewUrlParser: true })
  .then(err => console.log("DB connected"));

app.use('/api', api);

app.listen(port, () =>
  console.log(`App is live currently listening on port ${port}!`));

