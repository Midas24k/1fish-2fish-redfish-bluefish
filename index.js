const db = require('./connect');
const inquirer = require('inquirer');



function init() {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'Menu',
                message: 'What would you like to do?',
                choices: ['View all Employees', 'View all Roles', 'View all Departments', 'Add a new Department', "Exit"]

            })
        .then((answer) => {
            switch (answer.Menu) {
                case 'View all Departments':
                    executeDepartmentQuery();
                    break;
                case 'Add a new Department':
                    executeAddDepartmentQuery();
                    break;
                case 'View all Roles':
                    executeRoleQuery();
                    break;
                case 'View all Employees':
                    executeEmployeesQuery();
                    break;
                case 'Exit':
                    executeExitquery();
                    break;
                default:
                    console.log('Invalid choice');
            }
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}

function executeDepartmentQuery() {

    if (db) {
        db.query("SELECT * FROM department;", function (error, results) {
            if (error) {
                console.log("Error in department query:", error);
            } else {
                console.table(results);
                // Ask initial question again
                init();
            }
        });
    } else {
        console.log("Error: Database not initialized.");
    }
}
function executeAddDepartmentQuery() {
    inquirer
        .prompt({
            type: 'input',
            name: 'departmentName',
            message: 'Enter the name of the new department:'
        })
        .then((answer) => {
            if (db) {
                // Execute the INSERT query to add the new department
                db.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function (error, results) {
                    if (error) {
                        console.log("Error adding new department:", error);
                    } else {
                        console.log("New department added successfully!");
                        // Display the updated list of departments
                        db.query("SELECT * FROM department;", function (error, results) {
                            if (error) {
                                console.log("Error retrieving department list:", error);
                            } else {
                                console.table(results);
                                // Ask initial question again
                                init();
                            }
                        });
                    }
                });
            } else {
                console.log("Error: Database not initialized.");
            }
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}

function executeRoleQuery() {

    if (db) {
        db.query("SELECT * FROM role;", function (error, results) {
            if (error) {
                console.log("Error in role query:", error);
            } else {
                console.table(results);
                // Ask initial question again
                init();
            }
        });
    } else {
        console.log("Error: Database not initialized.");
    }
}

function executeEmployeesQuery() {

    if (db) {
        db.query("SELECT * FROM employees;", function (error, results) {
            if (error) {
                console.log("Error in employees query:", error);
            } else {
                console.table(results);
                // Ask initial question again
                init();
            }
        });
    } else {
        console.log("Error: Database not initialized.");
    }
}
function executeExitquery() {
    process.exit();
}








// Call the init function to start the process
init();




//IF view employees, then run the function above
//ELSE IF view departments ""
// ELSE IF view roles ""
// INSERT?
// THEN re-ask initial question
// type: 'list',
// name: 'menu',
// message: 'Which query do you want to execute?',
// choices: ['Query 1: Select * FROM department', 'Query 2: Select * FROM role', 'Query 3: Select * FROM employees']