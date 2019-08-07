const express = require('express')
const router = express.Router();



router.use('/accounts', require('../api/accounts'));

router.get('/', (req, res) => {
  res.send('<h1>Welcome to DryServ API</h1>')  
})

module.exports = router;