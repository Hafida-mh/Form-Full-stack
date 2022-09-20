const express = require("express");
const routerControlForm1 = express.Router();
const controlForm1 = require('../formule1/controller');


routerControlForm1.post('/', controlForm1.postForm);

module.exports =  routerControlForm1;

