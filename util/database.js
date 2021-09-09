const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'shop_schema',
    password:'hondacbr150r'
});

module.exports = pool.promise();