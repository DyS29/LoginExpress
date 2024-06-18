
const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: process.env.HOSTTDB || 'localhost',
    user: process.env.HOSTTDB || 'root',
    database: process.env.DB || 'login',
    password: process.env.PASSWORDDDB || '',
    port: process.env. PORTDB || 3306,
});

module.exports = connection 