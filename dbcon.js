const mysql = require('mysql');

const con = mysql.createConnection({
    host: "<DB_ENDPOINT>",
    user: "admin",
    password: "<DB_PASSWORD>"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.end();
});