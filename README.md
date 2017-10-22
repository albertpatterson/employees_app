# employees_app
An application for exploring and manipulating the data contained in the [Employees Sample SQL Database](https://dev.mysql.com/doc/employee/en) using the [MySQL Connector JDBC driver](https://dev.mysql.com/downloads/connector/j/5.1.html). 

# Features
- [x] View available tables of data
    - [x] departments: the departments within the company
    - [x] dept_emp: mapping employees to departments
    - [x] dept_manager: mapping of departments to managers
    - [x] employees: information about each employee
    - [x] salaries: salaries of employees
    - [x] titles: titles of employees
- [ ] update data
        - [ ] add department
        - [ ] remove department
        - [ ] rename department
        - [ ] add manager
        - [ ] remove manager
        - [ ] add employee
        - [ ] remove employee        
        - [ ] update employee department 
        - [ ] update employee title 
        - [ ] update employee salary 
- [ ] custom queries
    - [ ] Employee name, Current department, Title, Current salary and Manager
    - [ ] Employee salary, title, and department history
    - [ ] Employee maximum salary, curent salary
    - [ ] Employee length of service
    - [ ] Current and former Employees 
    
# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequesits
1. [MySQL](https://www.mysql.com/downloads/) and a servlet containers such as [Tomcat](https://tomcat.apache.org/download-70.cgi)
    1. alternatively, consider using [XAMPP](https://www.apachefriends.org/index.html), which provides both
    
## Installation
1. Clone this repository

## Deployment
1. Place the included war file into %CATALINA_HOME%
