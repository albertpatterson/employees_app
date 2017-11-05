import { Component, OnInit, OnChanges, EventEmitter } from '@angular/core';

import { Employee } from "../utils/Employee";

/**
 * defines a form for updating an employee's data
 * 
 * @export
 * @class EmployeeDataUpdateFormComponent
 * @implements {OnInit}
 * @implements {OnChanges}
 */
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

  /**
   * the data of the employee to update
   * 
   * @type {Employee}
   * @memberof EmployeeDataUpdateFormComponent
   */
  public employee: Employee;

  /**
   * indicates if the form is visible
   * 
   * @type {string}
   * @memberof EmployeeDataUpdateFormComponent
   */
  public visibility: string = "visible";
  
  /**
   * the title to be shown with the form
   * 
   * @type {string}
   * @memberof EmployeeDataUpdateFormComponent
   */
  public formTitle: string = "Add New Employee"
  
  /**
   * indicates if the new employee data is being provided
   * 
   * @type {boolean}
   * @memberof EmployeeDataUpdateFormComponent
   */
  public isNewEmployee: boolean;

  /**
   * emitter for the update employee data event
   * 
   * @type {EventEmitter<Employee>}
   * @memberof EmployeeDataUpdateFormComponent
   */
  public changeSubmit:EventEmitter<Employee> = new EventEmitter();
  
  /**
   * emitter for the visibility changed event
   * 
   * @type {EventEmitter<string>}
   * @memberof EmployeeDataUpdateFormComponent
   */
  public visibilityChange: EventEmitter<string> = new EventEmitter();
  
  constructor() { }
  
  /**
   * update the display on it
   * 
   * @memberof EmployeeDataUpdateFormComponent
   */
  ngOnInit(){
    this._updateDisplay();
  }

  /**
   * update the display when any changes occure
   * 
   * @memberof EmployeeDataUpdateFormComponent
   */
  ngOnChanges() {
    this._updateDisplay();
  }

  /**
   * update the form display
   * 
   * @private
   * @memberof EmployeeDataUpdateFormComponent
   */
  private _updateDisplay(){
    this.isNewEmployee = !this.employee.emp_no;
      if(!this.isNewEmployee){
        this.formTitle = "Update Data Form Employee #"+this.employee.emp_no;
      }else{
        this.formTitle = "Provide Data For New Employee"
      }
  }

  /**
   * event the employee data update event
   * 
   * @memberof EmployeeDataUpdateFormComponent
   */
  onSubmit(){
    this.changeSubmit.next(this.employee);
    this.hide();
  }

  /**
   * hide the form
   * 
   * @memberof EmployeeDataUpdateFormComponent
   */
  hide(){
    console.log("hide")
    this.visibility="hidden";
    this.visibilityChange.next(this.visibility);    
  }

  /**
   * show the form
   * 
   * @memberof EmployeeDataUpdateFormComponent
   */
  show(){
    this.visibility="visible";
    this.visibilityChange.next(this.visibility);
  }

  /**
   * fire an employee
   * 
   * @memberof EmployeeDataUpdateFormComponent
   */
  fireEmployee(){
    alert("YOURE FIRED!");
    // todo use service to update data
  }

}
