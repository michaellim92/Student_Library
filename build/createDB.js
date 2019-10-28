const mysql = require('mysql');

let dbsql = `CREATE DATABASE  librarylogin`;
let tblsql = `CREATE TABLE \`users\` (
    \`id\` INT NOT NULL AUTO_INCREMENT,
    \`first_name\` VARCHAR(255) NOT NULL,
    \`last_name\` VARCHAR(255) NOT NULL,
    \`email\` VARCHAR(255) NOT NULL,
    \`password\` VARCHAR(255) NOT NULL,
    UNIQUE KEY \`email_unique\` (\`email\`) USING BTREE,
    PRIMARY KEY (\`id\`)
);`
/*Creating Login Database */

//connecting db
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
  });
  
  //creating database
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    connection.query(dbsql, function(err, result) {
        if (err) throw err;
        console.log('The Database is created');

        connection.query('USE librarylogin;', function(err) {
            if (err) throw err;
            connection.query(tblsql, function(err, result) {
                if (err) throw err;
                console.log('Table is created');
            })
        });
    })
  });
  
  //creating table
  
  