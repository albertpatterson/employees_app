// defines a set of detailed data for an employee
export class Employee{
    emp_no: string;
    birth_date: string;
    first_name: string;
    last_name: string;
    gender: string;
    hire_date: string;
    title: string;
    to_date: string;
    dept_name: string;
    salary: string; 
  
    constructor(emp_no, birth_date, first_name, last_name, gender, hire_date, title, to_date, dept_name, salary){
        this.emp_no=emp_no;
        this.birth_date=birth_date;
        this.first_name=first_name;
        this.last_name=last_name;
        this.gender=gender;
        this.hire_date=hire_date;
        this.title=title;
        this.to_date=to_date;
        this.dept_name=dept_name;
        this.salary=salary;
    }
  };