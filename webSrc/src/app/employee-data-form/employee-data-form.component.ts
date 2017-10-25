import { Component, OnChanges, OnInit, EventEmitter } from '@angular/core';
import { Employee } from "../utils/Employee";

@Component({
  selector: 'app-employee-data-form',
  templateUrl: './employee-data-form.component.html',
  styleUrls: ['./employee-data-form.component.css'],
  inputs: [
    "emp_no",
    "birth_date",
    "first_name",
    "last_name",
    "gender",
    "hire_date",
    "title",
    "to_date",
    "dept_name",
    "salary",
    "visibility"
  ],
  outputs: [
    "changeSubmit",
    "visibilityChange"    
  ]
})
export class EmployeeDataFormComponent implements OnInit, OnChanges {


  public emp_no: string;
  public birth_date: string;
  public first_name: string;
  public last_name: string;
  public gender: string;
  public hire_date: string;
  public title: string;
  public to_date: string;
  public dept_name: string;
  public salary: string; 

  public employee: Employee;
  public visibility: string = "visible";
  public formTitle: string = "Add New Employee"

  public changeSubmit:EventEmitter<Employee> = new EventEmitter();
  public visibilityChange: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    this.employee=new Employee(
      this.emp_no,
      this.birth_date, 
      this.first_name, 
      this.last_name, 
      this.gender, 
      this.hire_date, 
      this.title, 
      this.to_date, 
      this.dept_name, 
      this.salary);

      console.log(this.employee);
  }

  ngOnChanges() {
    this.employee=new Employee(
      this.emp_no,
      this.birth_date, 
      this.first_name, 
      this.last_name, 
      this.gender, 
      this.hire_date, 
      this.title, 
      this.to_date, 
      this.dept_name, 
      this.salary);

      console.log(this.employee);
  }


  onSubmit(){
    console.log(this.employee);
  }

  hide(){
    this.visibility="hidden";
    this.visibilityChange.next(this.visibility);
    
  }

  show(){
    this.visibility="visible";
    this.visibilityChange.next(this.visibility);
  }

}
