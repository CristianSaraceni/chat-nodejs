const chatModel = require("../models/chatModel");

module.exports = {
    chat: function(req, res) {
      res.send(chatModel);
    },

    chatPost: function(req, res) {
      chatModel.items.push (req.body)
    
    },
}