// Set up MySQL connection.
// const mysql = require("mysql");
// require('dotenv').config()

// let connection;


// if(process.env.JAWSDB_URL){

//   connection = mysql.createConnection(process.env.JAWSDB_URL);

// } else{
//  connection = mysql.createConnection({

//   host: process.env.DB_host,
//   port: process.env.DB_port,
//   user: process.env.DB_user, 
//   password: process.env.DB_password,
//   database: process.env.DB_database


// })

// }
// // Make connection.
// connection.connect(function(err) {

//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);

  
  
// });

// // Export connection for our ORM to use.
// module.exports = connection;

