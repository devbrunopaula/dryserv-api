const express = require("express");
const app = express();
const mysql = require("mysql");
const logger = require('./middleware/Logger')
const db = require("./src/db");
const dotenv = require("dotenv");
const cors = require('cors')
const bodyParser = require('body-parser');

// Middleware
app.use(logger);
app.use(require('./router'));
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


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





// Listening PORT

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Running on port ${port}`));