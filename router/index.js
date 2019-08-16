const express = require('express')
const router = express.Router();
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()


router.use('/accounts', jsonParser, require('../api/accounts'));
router.use('/accounts/:id', require('../api/accounts'));

router.get('/',  (req, res) => {
  res.send('<h1>Welcome to DryServ API</h1>')  
})

module.exports = router;