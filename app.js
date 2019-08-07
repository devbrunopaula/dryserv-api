const express = require("express");
const app = express();
const mysql = require("mysql");
const logger = require('./middleware/Logger')
const db = require("./src/db");
const dotenv = require("dotenv");


// Middleware
app.use(logger);
app.use(require('./router'));

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


app.get("/test", (req, res) => {
  
});


app.get('/accounts/:id', (req, res) => {
    const id = req.params.id
    
   let sql = `SELECT * FROM accounts where accountID = ('${id}')`;
   db.query(sql, (err, result) => {
       if (err) throw err
       res.send(result)
       console.log(id)
   })
})


// Listening PORT

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));