var express = require("express");
var api = express.Router();

const mensajeController = require("../controllers/mensajeControllers");

api.post("/mensajes/crear", mensajeController.mensajesCrear);

module.exports = api;
