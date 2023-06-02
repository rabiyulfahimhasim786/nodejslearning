'use strict';
const mysql = require('mysql2');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rabi0597@A',
  database : 'testing'
});
dbConn.connect(function(err) {
    // if (!err) throw err;
    if (!err)
    console.log("Database Connected!");
    else
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});
// module.exports = dbConn;

//method 2 for database connections
// var dbConn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'rabi0597@A',
//     database: 'testing',
//     multipleStatements: true
// });

// dbConn.connect((err) => {
//     if (!err)
//         console.log('DB connection succeded.');
//     else
//         console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
// });
module.exports = dbConn;