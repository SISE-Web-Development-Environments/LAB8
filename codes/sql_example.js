require("dotenv").config();
const sql = require("mssql");

const config = {
  user: process.env.tedious_userName,
  password: process.env.tedious_password,
  server: process.env.tedious_server,
  database: process.env.tedious_database
};

sql
  .connect(config)
  .then((pool) => {
    return pool.request().query("select * from users");
  })
  .then((result) => {
    console.log(result.result);
  })
  .catch((err) => {
    // ... error checks
  });
