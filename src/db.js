const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
})


// const db = mysql.createConnection({
//    host: 'us-cdbr-iron-east-02.cleardb.net',
//    user: 'b29eb30123d588',
//    password: '142e8cec',
//    database: 'heroku_68b6cba97538592'
//    //`mysql://b29eb30123d588:142e8cec@us-cdbr-iron-east-02.cleardb.net/heroku_68b6cba97538592?reconnect=true`
// });
const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.mysqlpassword,
    database: process.env.database
    //`mysql://b29eb30123d588:142e8cec@us-cdbr-iron-east-02.cleardb.net/heroku_68b6cba97538592?reconnect=true`
});

module.exports = db;