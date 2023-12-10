const mysql = require('mysql2');
require('dotenv').config();

/*
 * Creamos un pool de conexiones
 */const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.DBPASS,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

pool.query("SELECT * FROM category", function(err, rows, fields) {
  // Connection is automatically released when query resolves
  if(err){
    throw err;
  }else{
    console.log("Conexion exitosa");
  }
});





//Finalizo la conexion con la base de datos y estar utilizando la memoria RAM
// conexion.end(); 
conexion.end()


