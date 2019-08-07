const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
})


const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.mysqlpassword,
    database: process.env.database,
    // path: process.env.path,
    // port: process.env.msqlport 


});

module.exports = db;