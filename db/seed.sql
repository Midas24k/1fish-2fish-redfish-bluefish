USE employee_db;

INSERT INTO department (name) 
    VALUES ("Human Resources"),
            ("Marketing"),
            ("Sales"),
            ("Finance");
            


INSERT INTO role (title, salary, department_id)
    VALUES  ('Sales Associate', '50000', 3),
            ('Sales Representative', '75000', 3),
            ('Account Manager', '150000', 3),
            ('Sales Manager', '160000', 3),
            ('Marketing analyst', '40000', 2),
            ('Marketing specialist', '60000', 2),
            ('Marketing coordinator', '40000', 2),
            ('Marketing manager', '160000', 2),
            ('HR Generalist', '50000', 1),
            ('HR Coordinator', '85000', 1),
            ('HR Manager', '120000', 1),
            ('Chief Human Resources Officer', '225000', 1),
            ('Payroll Assistant', '65000',4),
            ('Financial Analyst', '85000', 4),
            ('Financial Advisor', '120000', 4),
            ('Finance Manager', '175000', 4);



INSERT INTO employees (first_name, last_name, role_id, manager_id) 
    VALUES ( 'John', 'Doe', 1, null),
            ('Jane', 'Smith', 1, 1),
            ('Bob', 'Johnson', 2, 1),
            ('Jenny', 'Williams', 2, null),
            ('Ryan', 'Jones', 3, 4),
            ('William', 'Clark', 3, 4),
            ('Clark', 'Kent', 2, 2),
            ('Bruce', 'Banner', 1, 2),
            ('James', 'Howlett', 4, 3),
            ('Victer', 'Creed', 3, 3);
