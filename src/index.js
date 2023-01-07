const express = require("express");
const mongoose = require("mongoose");
const authHandler = require("./middleware/auth");
const User = require("./models/user");
const router = require("./routes/user/user.controller");
const axios = require('axios');
const nodemailer = require("nodemailer");
var cors = require('cors')

const app = express();
// app.use(authHandler);
app.use(cors())
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/bootcamp1")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Couldn't connected to MongoDB, ${error}`));

app.use("/users", router);

app.listen(5000, () => console.log("App is listening at port 5000"));
