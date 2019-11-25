var express = require("express");
var api = express.Router();

const chatController = require("../controllers/chatController");

api.get("/chat", chatController.chat);

api.post("/chat", chatController.chatPost);

module.exports = api;
