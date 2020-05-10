const DButils = require("./DButils");
require("dotenv").config();
//#region configures
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();
app.use(logger("dev")); //logger
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(cookieParser()); //Parse the cookies into the req.cookies
app.use(express.static(path.join(__dirname, "public"))); //To serve static files such as images, CSS files, and JavaScript files

var port = process.env.PORT || "3000";
//#endregion

app.post("/users/Register", (req, res) => {
  // parameters exists
  // valid parameters
  // username exists

  // before: if (db.find((x) => x.name === req.body.name)) throw new Error("Name exists");
  // after:
  // add the new username
  var newUser = { ...req.body, id: db.length };
  db.push(newUser);
  res.status(201).send("ok");
  // db.push(req.body)
});

app.post("/users/Login", (req, res) => {
  // check that username exists
  if (!db.find((x) => x.name === req.body.name))
    throw new Error("Name is not exists");
  // check that the password is correct
  var user = db.find((x) => x.name === req.body.name);
  if (req.body.password !== user.password) {
    throw new Error("password incorrect");
  }
  //create cookie
  let options = {
    maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    httpOnly: true, // The cookie only accessible by the web server
    signed: true // Indicates if the cookie should be signed
  };
  // Set cookie
  res.cookie("cookieName", "cookieValue", options); // options is optional

  // return cookie
  res.status(200);
});

app.get("/recipe/getRecipe", (req, res) => {});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
