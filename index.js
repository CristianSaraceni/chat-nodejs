var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// import routes

const chatRoute = require("./src/routes/chatRoute");

app.use("/api", chatRoute);

//config ports
var port = Number(process.env.PORT || 3001);

app.listen(port, function() {
  console.log("Running in port", port);
});
