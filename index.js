const express = require('express');
const db = require('./db.js');


const app = express();

app.use(express.json());

const PORT = 3000;

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));  