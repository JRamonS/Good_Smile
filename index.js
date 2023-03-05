const express = require('express');
const db = require('./db/db');
require('dotenv').config();

const routes = require("./router");

const app = express();

app.use(express.json());
app.use(routes)

//PORT
const PORT = process.env.PORT || 3000;

  db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message)); 
