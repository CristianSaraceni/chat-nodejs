var mysql = require("mysql");
const dotenv = require('dotenv').config();

var connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
    // host: 'localhost',
    // port: 3306,
    // user: 'root',
    // password: '123456',
    // database: 'chat'
  });
  
  module.exports = connection;