var express = require("express");
var api = express.Router();

const chatController = require("../controllers/chatController");

api.get("/chat", chatController.chat);

module.exports = api;
