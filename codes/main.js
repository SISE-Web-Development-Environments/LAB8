//#region global imports
const DButils = require("./DButils");
const axios = require("axios");
const CryptoJS = require("crypto-js");
require("dotenv").config();
//#endregion
//#region express configures
var express = require("express");
const asyncHandler = require("express-async-handler");
// require("express-async-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();
app.use(logger("dev")); //logger
app.use(express.json()); // parse application/json
const cookies_options = {
  maxAge: 1000 * 60 * 15, // would expire after 15 minutes
  httpOnly: true, // The cookie only accessible by the web server
  signed: true // Indicates if the cookie should be signed
};
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(cookieParser(process.env.COOKIE_SECRET, cookies_options)); //Parse the cookies into the req.cookies
app.use(express.static(path.join(__dirname, "public"))); //To serve static files such as images, CSS files, and JavaScript files

var port = process.env.PORT || "3000";
//#endregion

app.post(
  "/users/Register",
  asyncHandler(async (req, res) => {
    // parameters exists
    // valid parameters
    // username exists
    const users = await DButils.execQuery("SELECT username FROM dbo.users");

    if (users.find((x) => x.username === req.body.username))
      throw new Error("Username taken");

    // add the new username
    let hash_password = CryptoJS.SHA3(req.body.password).toString(
      CryptoJS.enc.Base64
    );
    await DButils.execQuery(
      `INSERT INTO dbo.users (username, password) VALUES ('${req.body.username}', '${hash_password}')`
    );

    res.status(201).send("user created");
  })
);

app.post(
  "/users/Login",
  asyncHandler(async (req, res) => {
    // check that username exists
    // before: if (!db.users.find((x) => x.name === req.body.name))
    //   throw new Error("password or Name is not correct");
    // after:
    const users = await DButils.execQuery("SELECT username FROM dbo.users");

    if (users.find((x) => x.username === req.body.username))
      throw new Error("Username taken");

    // check that the password is correct
    // before: var user = db.users.find((x) => x.name === req.body.name);

    if (req.body.password !== user.password) {
      throw new Error("password or Name is not correct");
    }

    // Set cookie
    res.cookie("cookieName", "cookieValue", cookies_options); // options is optional

    // return cookie
    res.status(200).send("login succeeded");
  })
);

app.get(
  "/recipe/getRecipe",
  asyncHandler(async (req, res) => {
    const recipe = await axios.get(
      `https://api.spoonacular.com/recipes/${req.query.id}/information`,
      {
        params: {
          includeNutrition: false,
          apiKey: process.env.spooncular_apiKey
        }
      }
    );
    res.send(recipe.data);
  })
);

app.use((err, req, res) => {
  res.status(500).json({
    message: err.message
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
