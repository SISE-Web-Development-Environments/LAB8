// const db = require("../db");

getUser(1)
  .then((user) => getInterests(user.userId))
  .then((interests) => getLocation(interests[0]))
  .then((location) => console.log(location))
  .catch((error) => console.log(error.message));

//TODO correct
const getUser = new Promise((resolve, reject) => {
  // find user
  const user = { userId: Id, data: "aoisfoiadsfodifh" };
  if (user) resolve(user);
  else reject(new Error("user not found"));
});

//TODO Complete
// const getInterests =
// const getLocation =
