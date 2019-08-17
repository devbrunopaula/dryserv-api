const express = require("express");
const router = express.Router();

const db = require("../../src/db");

// Routes [ GET ]  URL  /
router.get("/", (req, res) => {
  db.query("SELECT * FROM orders", (err, result) => {
    if (err) throw error;
    res.send(result);
  });
});

// Routes [ GET ]  URL  ./orders/:ID

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) res.status(404).send("Not ID Found");
  const query = `SELECT accounts.name, accounts.phone1, accounts.accountID
  FROM orders
  right JOIN accounts
  on orders.orderID = accounts.accountID
  where accounts.accountID = ${id}
  
  `;

  let sql = `SELECT * FROM orders where ordersID = ('${id}')`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(id);
  });
});

// Routes [ POST ]  URL  ./accounts
router.post("/", (req, res) => {
  const accountID = req.body.accountID;
  const orderNumber = req.body.orderNumber;

  if ((accountID == null) & (orderNumber == null))
    res.send("Name & Phone Field are required");
  const create = ` 
    INSERT INTO orders
    (accountID, dateCreated, orderNumber)
    VALUES ('${accountID}', (now()), '${orderNumber}'
    );`;

  db.query(create, (err, result) => {
    if (err) console.log(err);
    res.status(201).send(result);
  });
});

module.exports = router;
