
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

// Routes [ GET ]  URL  ./accounts/:ID

router.get('/:id', (req, res) => {
    const id = req.params.id

    let sql = `SELECT * FROM accounts where accountID = ('${id}')`;
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send(result)
        console.log(id)
    })
})

// Routes [ POST ]  URL  ./accounts
router.post("/", (req, res) => {

    console.log(req.body)
})



module.exports = router