var mysql = require('mysql');
var connection=mysql.createConnection({
    host:'database-1.c6owrg71senx.us-west-2.rds.amazonaws.com',
    port:'3306',
    user:'admin',
    password:'password',
    database:'my_db'

});

connection.connect(err =>{
    if(err)throw err;
    console.log('Connected To DB');
});
module.exports = connection;