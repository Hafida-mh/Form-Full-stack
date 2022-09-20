const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const routerControlForm1 = require('./controller/formule1/router');
require("dotenv").config();



app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/promotionback/static', express.static('public'));  //  /appliv/static

app.use('/form1', routerControlForm1);


const PORT = process.env.PORT || 2000
app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));