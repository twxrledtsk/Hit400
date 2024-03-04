require("dotenv").config();
const mysql = require("mysql2");


const pool = mysql.createPool({
    host:process.env.HOST,
    database:process.env.DB_NAME,
    user:process.env.USER,
    password:process.env.PASSWORD,
    queueLimit:process.env.LIMIT
});


module.exports = pool;