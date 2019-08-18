const express = require("express");
const router = express.Router();

const db = require("../../src/db");

// Routes [ GET ]  URL  /
router.get("/", (req, res) => {
  db.query("SELECT * FROM accounts", (err, result) => {
    if (err) throw error;
    res.json(result);
  });
});

// Routes [ GET ]  URL  ./accounts/:ID

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) res.status(404).send("Not ID Found");
  let sql = `SELECT * FROM accounts where accountID = '${id}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(id);
  });
});

// Routes [ POST ]  URL  ./accounts
router.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone1 = req.body.phone1;
  const email = req.body.email;
  const address = req.body.address;
  const address2 = req.body.address2;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;

  if ((firstName == null) & (lastName == null))
    res.send("First Name & Last Field are required");

  createAccount = `
    INSERT INTO accounts (firstName, lastName, phone1, email, createdAt, address, address2, city, state, zipcode)
    VALUES ( '${firstName}', '${lastName}', '${phone1}', '${email}', '(now())', '${address}', '${address2}', '${city}', '${state}', '${zipcode}')`;

  db.query(createAccount, (err, result) => {
    if (err) console.log(err);
    res.status(201).send(result);
  });
});

module.exports = router;
