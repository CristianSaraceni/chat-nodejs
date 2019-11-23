var mysql = require("mysql");
const dotenv = require('dotenv').config();

var connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE
  });
  
  module.exports = connection;