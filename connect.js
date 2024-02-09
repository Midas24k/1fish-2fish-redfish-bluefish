const mysql = require('mysql2');
// here is our DB config object
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "King$hit88",
    database: "employee_db"
});

// here is our ASYNC request to CONNECT 
connection.connect(function(error) {
    if(error) {
        console.log("Error: ", error);
        throw Error(error)
    }
    
});


module.exports = connection;