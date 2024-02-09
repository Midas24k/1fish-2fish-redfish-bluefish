const db = require('./connect');
const inquirer = require('inquirer');



function init() {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'Menu',
                message: 'What would you like to do?',
                choices: ['View all Employees', 'Add new Employees', 'View all Roles', 'Add a new Role', 'View all Departments', 'Add a new Department', "Exit"]

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
                case 'Add a new Role':
                    executeAddRoleQuery();
                    break;
                case 'View all Employees':
                    executeEmployeesQuery();
                    break;
                case 'Add new Employees':
                    executeAddEmployeesQuery();
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
function executeAddRoleQuery() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the new role:'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary of the new role:'
            },
            {
                type: 'input',
                name: 'departmentId',
                message: 'Enter the department ID of the new role:'
            }
        ])
        .then((answers) => {
            if (db) {
                // Execute the INSERT query to add the new role
                db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answers.title, answers.salary, answers.departmentId], function(error, results) {
                    if (error) {
                        console.log("Error adding new role:", error);
                    } else {
                        console.log("New role added successfully!");
                        // Display the updated list of roles
                        db.query("SELECT * FROM role;", function(error, results) {
                            if (error) {
                                console.log("Error retrieving role list:", error);
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

function executeAddEmployeesQuery() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter the first name of the new employee:'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter the last name of the new employee:'
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'Enter the role ID of the new employee:'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter the manager ID of the new employee (if applicable):'
            }
        ])
        .then((answers) => {
            if (db) {
                // Execute the INSERT query to add the new employee
                db.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answers.firstName, answers.lastName, answers.roleId, answers.managerId], function(error, results) {
                    if (error) {
                        console.log("Error adding new employee:", error);
                    } else {
                        console.log("New employee added successfully!");
                        // Display the updated list of employees
                        db.query("SELECT * FROM employees;", function(error, results) {
                            if (error) {
                                console.log("Error retrieving employee list:", error);
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
