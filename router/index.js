const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

//Accounts
router.use("/accounts", jsonParser, require("../api/accounts"));
router.use("/accounts/:id", require("../api/accounts"));

//Orders
router.use("/orders", jsonParser, require("../api/orders"));
router.use("/orders/:id", require("../api/orders"));

//Index
router.get("/", (req, res) => {
  res.send("<h1>Welcome to DryServ API</h1>");
});

module.exports = router;
