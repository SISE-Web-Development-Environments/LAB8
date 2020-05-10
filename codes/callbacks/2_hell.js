// const db = require("../db");

try {
  getUser(1, (user) => {
    getInterests(user.userId, (interests) => {
      getLocation(interests[0], (location) => {
        console.log(location);
      });
    });
  });
} catch (error) {
  console.log(error.message);
}

//TODO correct
function getUser(Id, callback) {
  // find user
  const user = { userId: Id, name: "Eran" };
  if (user) callback(user);
  else throw new Error("user not found");
}

//TODO Complete
// function getInterests(Id, callback) {
// function getLocation(interest, callback) {
