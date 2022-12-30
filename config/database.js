const mysql = require('mysql');
require('dotenv').config();

let db = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: 3306,
    db : "multer_practice"
})

module.exports = db;