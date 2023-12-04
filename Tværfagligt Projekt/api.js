const express = require("express");
const app = express();
const port = 3000;
const { Client } = require("pg");
var pg = require("pg");

const klient = new Client({
  user: "thsvrkvn",
  host: "ella.db.elephantsql.com",
  database: "thsvrkvn", //læg mærke til at user og database er det samme på elephant, da vi er på en shared instance
  password: "48EwLxMNlE3EY4oEKwOOk5Zx-EBMXvC3",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

const qry = "SELECT * from skov";

klient.connect();
app.get("/skov", async (req, res) => {
  try {
    let queryData = await klient.query(qry);
    res.json({
      ok: true,
      foods: queryData.rows,
    });
  } catch (error) {
    res.json({
      ok: false,
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Appl. lytter på http://localhost:${port}`);
});
