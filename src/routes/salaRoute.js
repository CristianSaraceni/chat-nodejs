var express = require("express");
var api = express.Router();

const salaController = require("../controllers/salaController");

api.get("/salas", salaController.salasObtener);


module.exports = api;