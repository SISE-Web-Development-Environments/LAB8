const path = require("path");
const fs_promises = require("fs").promises;
const task1 = require("./1_task_answer");

task1
  .factorial_promise(65)
  .then((result) =>
    fs_promises.writeFile(path.join(__dirname, "message.txt"), result)
  )
  .then(() => console.log("file created"))
  .catch((err) => console.log(err));
