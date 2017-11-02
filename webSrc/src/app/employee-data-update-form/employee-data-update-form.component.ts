import { Component, OnInit, OnChanges, EventEmitter } from '@angular/core';

import { Employee } from "../utils/Employee";

@Component({
  selector: 'app-employee-data-update-form',
  templateUrl: './employee-data-update-form.component.html',
  styleUrls: ['./employee-data-update-form.component.css'],
  inputs: [
    "employee",
    "visibility"
  ],
  outputs: [
    "changeSubmit",
    "visibilityChange"    
  ]
})
export class EmployeeDataUpdateFormComponent implements OnInit, OnChanges {

  public employee: Employee;
  public visibility: string = "visible";
  public formTitle: string = "Add New Employee"
  public isNewEmployee: boolean;


  public changeSubmit:EventEmitter<Employee> = new EventEmitter();
  public visibilityChange: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(){
    this._updateDisplay();
  }

  ngOnChanges() {
    this._updateDisplay();
  }

  private _updateDisplay(){
    this.isNewEmployee = !this.employee.emp_no;
    console.log("isNewEmployee", this.isNewEmployee);
      if(!this.isNewEmployee){
        this.formTitle = "Update Data Form Employee #"+this.employee.emp_no;
      }else{
        this.formTitle = "Provide Data For New Employee"
      }

      console.log(this.employee);
  }

  onSubmit(){
    this.changeSubmit.next(this.employee);
    this.hide();
  }

  hide(){
    this.visibility="hidden";
    this.visibilityChange.next(this.visibility);    
  }

  show(){
    this.visibility="visible";
    this.visibilityChange.next(this.visibility);
  }

  fireEmployee(){
    this.visibility="hidden";
    alert("YOURE FIRED!");
  }

}
