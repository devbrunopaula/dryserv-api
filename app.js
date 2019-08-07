const express = require("express");
const app = express();

const logger = require('./middleware/Logger')
const db = require("./src/db");

// Middleware
app.use(logger);

//DB Connect
db.connect((err) =>{
    if(err){
       console.log(err)
    }
    console.log('SQL Connected')
    
});

// Setting up the .env config




//Routes
app.get("/", (req, res) => {
    res.send("Hello Wold");
});
app.get("/accounts", (req, res) => {
    let sql = "SELECT * FROM `dryserv-api`.Accounts order by accountID asc;";
    db.query( sql, (err, result) => {
if(err) throw err;
console.log(result )

res.json(result)
    })
});

app.get('/accounts/:id', (req, res) => {
    const id = req.params
    
   let sql = "SELECT * FROM `dryserv-api`.Accounts WHERE accountID IN ('1')";
   db.query(sql, (err, result) => {
       if (err) throw err
       res.send(result)
   })
})


// Listening PORT

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));