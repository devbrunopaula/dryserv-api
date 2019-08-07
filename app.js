const express = require("express");
const app = express();
const mysql = require("mysql");
const logger = require('./middleware/Logger')
const db = require("./src/db");
const dotenv = require("dotenv");
// Middleware
app.use(logger);

// Setting up the .env config
dotenv.config({
    path: './.env'
})


//DB Connect



db.connect((err) =>{
    if(err){
       console.log(err)
    }
    console.log('SQL Connected')
    
});




//Routes
app.get("/", (req, res) => {
    res.send("Hello Wold 11:50");
});
app.get("/accounts", (req, res) => {
    let sql = "SELECT * FROM `heroku_68b6cba97538592`.accounts order by accountID asc;";
    db.query( sql, (err, result) => {
if(err) throw err;
console.log(result )

res.json(result)
    })
});

app.get('/accounts/:id', (req, res) => {
    const id = req.params
    
   let sql = "SELECT * FROM `heroku_68b6cba97538592`.accounts WHERE accountID IN ('1')";
   db.query(sql, (err, result) => {
       if (err) throw err
       res.send(result)
   })
})


// Listening PORT

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));