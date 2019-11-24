var express = require("express");
var api = express.Router();

const sesionController = require("../controllers/sesionController");


api.post("/sesiones", sesionController.sesionesCrear);

module.exports = api;