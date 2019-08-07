const mysql = require("mysql");

const db = mysql.createConnection({
    host: '107.180.117.116',
    user: 'dryservapi',
    password: 'C@pecod508',
    database: 'dryserv-api',
    path: '/home/dryservcleaning',
    port: '3306'


});

module.exports = db;