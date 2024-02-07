const db = require('./connect');


console.log("I am code in the Index.js file AFTER the DB connection request")


db.query("SELECT * FROM department;", function(error, results) {
    if(error) {
        console.log("Err:", error)
    }
    console.table(results);
})