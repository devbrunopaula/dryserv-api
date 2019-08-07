
const express = require('express')
const router = express.Router();

const db = require('../../src/db');

router.get("/", (req, res) => {
    
    db.query('SELECT * FROM accounts', (err, result) => {
        if (err) throw error
        res.send(result)
    })
});
router.post("/", (req, res) => {

    console.log(req.body)
})



module.exports = router