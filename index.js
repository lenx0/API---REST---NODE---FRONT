const express = require("express");
const app = express();
const bp = require("body-parser");
const http = require('http');
const fs = require('fs');
const httpOption = {};

require('dotenv').config();

app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

const controllerPerson = require('./controllers/person.controller.ejs');

app.get("/", (req, res) => res.render("person"));

const port_http = process.env.PORT_HTTP | 5004;

var httpServer = http.createServer(httpOption, app);

httpServer.listen(port_http);

console.log(`Running ${port_http}`);



