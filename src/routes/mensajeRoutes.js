var express = require("express");
var api = express.Router();

const mensajeController = require("../controllers/mensajeControllers");

api.post("/mensajes/crear", mensajeController.mensajesCrear);
api.get("/mensajes/obtener", mensajeController.mensajesObtener);


module.exports = api;
