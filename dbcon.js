const mysql = require('mysql');

const con = mysql.createConnection({
    host: "database-1.cxjn11x2xgm7.ap-southeast-1.rds.amazonaws.com",
    user: "admin",
    password: "qwerty12345"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.end();
});
