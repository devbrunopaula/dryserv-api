
const express = require('express')
const router = express.Router();

const db = require('../../src/db');


// Routes [ GET ]  URL  /
router.get("/", (req, res) => {
    
    db.query('SELECT * FROM accounts', (err, result) => {
        if (err) throw error
        res.send(result)
    })
    
});
router.get("/test/:id", (req, res) => {
    const id = req.params.id
const sql = `SELECT * FROM accounts where accountID = ('${id}')`;



db.query(sql, (err, result) => {
  
   if(!id === result.id) res.send('NO ID')
   res.send(result)
})

});

// Routes [ GET ]  URL  ./accounts/:ID

router.get('/:id', (req, res) => {
    
    const id = req.params.id
    if (!id) res.status(404).send('Not ID Found')
    let sql = `SELECT * FROM accounts where accountID = ('${id}')`;
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send(result)
        console.log(id)
    })
})

// Routes [ POST ]  URL  ./accounts
router.post("/", (req, res) => {

    const name = req.body.name;
    const phone1 = req.body.phone1;
    
    if(name == null & phone1 == null) res.send('Name & Phone Field are required')
    const create = ` 
    INSERT INTO accounts 
    ( name, phone1, createdAt)
    VALUES ('${name}', '${phone1}', (now())
    );`

    db.query(create, (err, result) => {
        if( err ) console.log(err)
        res.status(201).send(result)
        
    })
 
})



module.exports = router