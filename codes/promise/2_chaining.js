const db = require("../db");

function getUser(id) {
  return new Promise((resolve, reject) => {
    let user = db.users.find((x) => x.userId == id);
    if (user) resolve(user);
    else reject(new Error("user not found"));
  });
}

function getInterests(id) {
  return new Promise((resolve, reject) => {
    let interests = db.interests.find((x) => x.userId == id);
    if (interests) resolve(interests);
    else reject(new Error("interests not found"));
  });
}

function getLocation(interest) {
  return new Promise((resolve, reject) => {
    let location = db.locations.find((x) => x.interest == interest);
    if (location) resolve(location);
    else reject(new Error("location not found"));
  });
}

getUser(1)
  .then((user) => getInterests(user.userId))
  .then((interests) => getLocation(interests.interests[0]))
  .then((location) => console.log(location))
  .catch((error) => console.log(error.message));

// Answer
