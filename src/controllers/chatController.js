const chatModel = require("../models/chatModel");

module.exports = {
    chat: function(req, res) {
      res.send(chatModel);
    },
}