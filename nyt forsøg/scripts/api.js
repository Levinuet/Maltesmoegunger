const express = require("express");
const app = express();
const port = 8080;
const { Client } = require("pg");
var pg = require("pg");
const cors = require("cors");
app.use(cors());

// Tillad alle klientside-anmodninger (Dette er for demonstration. Brug mere specifikke regler i produktion.)
app.use(cors());

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

const qry = "SELECT * from changes";

klient.connect();
app.get("/changes", async (req, res) => {
  try {
    let queryData = await klient.query(qry);
    res.json({
      ok: true,
      skovData: queryData.rows,
    });
  } catch (error) {
    res.json({
      ok: false,
      message: error.message,
    });
  }
});
app.listen(port, () => {
  console.log(`Server kører på http://localhost:${port}`);
});
