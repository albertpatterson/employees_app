import { Component, OnInit} from '@angular/core';

import { DatabaseService } from '../services/database.service';

import { Employee } from "../utils/Employee";
import { Filter } from "../utils/Filter";
import { SingleActivationManager } from "../utils/SingleActivationManager";


// forms to be shown with this tab
const overlays: string[] = ["updateForm", "filterForm"];

/**
 * component defining the tab to display and update detailed imployee data
 * 
 * @export
 * @class EmployeeDataTabComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-employee-data-tab',
  templateUrl: './employee-data-tab.component.html',
  styleUrls: ['./employee-data-tab.component.css'],
  inputs:["display"]
})
export class EmployeeDataTabComponent implements OnInit{

  /**
   * inidicates if the tab is "visible" or "hidden" 
   * 
   * @type {string}
   * @memberof EmployeeDataTabComponent
   */
  public display: string;

  /**
   * fields of the detailed employee data
   * 
   * @type {string[]}
   * @memberof EmployeeDataTabComponent
   */
  public headers: string[];

  /**
   * detailed employee data
   * 
   * @type {string[][]}
   * @memberof EmployeeDataTabComponent
   */
  public rowData: string[][];

  /**
   * object represending an employee that can be updated
   * 
   * @private
   * @type {Employee}
   * @memberof EmployeeDataTabComponent
   */
  private _employee: Employee;

  /**
   * snapshot of the employee to provide to the employee data update form
   * 
   * @type {Employee}
   * @memberof EmployeeDataTabComponent
   */
  public employeeSnapshot: Employee;

  /**
   * filter to be used when requesting detailed employee data
   * 
   * @type {Filter}
   * @memberof EmployeeDataTabComponent
   */
  public filter: Filter;

  /**
   * SingleActivationManager that controls the display of the update and filter forms
   * 
   * @type {*}
   * @memberof EmployeeDataTabComponent
   */
  public overlayVisibilityManager: any;
  
  /**
   * indicates if a request for data has not been resolved
   * 
   * @type {boolean}
   * @memberof EmployeeDataTabComponent
   */
  public loading: boolean = false;

  /**
   * indicates if the tooltips for the viwe buttons should be shown
   * 
   * @type {boolean}
   * @memberof EmployeeDataTabComponent
   */
  public showTips: boolean = true;

  /**
   * indicates if the tooltip for the table should be shown
   * 
   * @type {boolean}
   * @memberof EmployeeDataTabComponent
   */
  public showTableTip: boolean = null;
  
  /**
   * Creates an instance of EmployeeDataTabComponent.
   * @param {DatabaseService} databaseService - the service allowing querying and updating of the database
   * @memberof EmployeeDataTabComponent
   */
  constructor(private databaseService: DatabaseService) { }

  /**
   * initialize the employee and overlayVisiblityManager
   * 
   * @memberof EmployeeDataTabComponent
   */
  ngOnInit(){
    this._setEmployee(null);
    this.filter = new Filter(true, true, 5);
    this.overlayVisibilityManager = new SingleActivationManager(overlays, "visible", "hidden");
  }

  /**
   * apply updates to the employee
   * 
   * @param {Employee} updatedEmployee - the updated employee data
   * @memberof EmployeeDataTabComponent
   */
  applyUpdate(updatedEmployee: Employee): void {
    // show the loading indicator until updated data is received
    this.loading = true;

    let updateApplied: Promise<Employee>;
    // if the employee number is null, a new employee is to be added
    if(this._employee.emp_no===null){
      updateApplied=this.databaseService.addEmployee(updatedEmployee)

    // otherwise an existing employee is to be updated 
    }else{
      updateApplied = this.updateEmployee(updatedEmployee);
    }

    updateApplied.then(employee=>{
      this.updateEmployeeDataDisplay(employee);
      this.loading = false;
    })
    .catch(this._handleError);
  }

  /**
   * update an existing employee
   * 
   * @param {Employee} updatedEmployee - the updated employee data
   * @returns {Promise<Employee>} promise to be resolve once the request to update the employee is resolved
   * @memberof EmployeeDataTabComponent
   */
  updateEmployee(updatedEmployee: Employee): Promise<Employee>{
    
    this.showTableTip = false;

    let updateApplied: Promise<Employee>;

    // create an object represending the fields to update
    let update={};
    for(let field in this._employee){
      if(this._employee[field]!==updatedEmployee[field]){
        update[field]=updatedEmployee[field];
      }
    }
    
    // apply the update and return promise
    if(Object.keys(update).length>0){
      this._setEmployee(updatedEmployee);
      updateApplied = this.databaseService.updateEmployee(this._employee.emp_no, update)
    }else{
      updateApplied=Promise.resolve(this._employee);
    }
    return updateApplied

  }

  /**
   * update the detailed employee data displayed in the table
   * 
   * @param {Employee} employee - the updated employee data
   * @memberof EmployeeDataTabComponent
   */
  updateEmployeeDataDisplay(employee: Employee){

    let emp_no_str = employee.emp_no.toString();
    let row = this.rowData.findIndex(row=>row[0]===emp_no_str);
    if(row===-1){
      row = this.rowData.length;
      this.rowData[row]=[];
    }
    
    this.rowData[row][0]= employee.emp_no;
    this.rowData[row][1]= employee.birth_date;
    this.rowData[row][2]= employee.first_name;
    this.rowData[row][3]= employee.last_name;
    this.rowData[row][4]= employee.gender;
    this.rowData[row][5]= employee.hire_date;
    this.rowData[row][6]= employee.title;
    this.rowData[row][7]= employee.to_date;
    this.rowData[row][8]= employee.dept_name;
    this.rowData[row][9]= employee.salary;
  }
  
  /**
   * fetch the detailed employee data according to the filter
   * 
   * @memberof EmployeeDataTabComponent
   */
  fetchData(){
  
    this.showTips = false;
    this._clearData();
    this.loading = true;

    this.databaseService.getFullEmployeeData(this.filter)
    .then(data=>{
      this.showTableTip = this.showTableTip===null;
      this._updateData(data); 
      this.loading=false;
    })
    .catch(this._handleError)
  }

  /**
   * update the data displayed in the table
   * 
   * @private
   * @param {any} data - the data to display in the table
   * @memberof EmployeeDataTabComponent
   */
  private _updateData(data: any):void{
    this.headers=data.columnNames;
    this.rowData=data.data;
    this.overlayVisibilityManager.deactivateAll();
  }

  /**
   * clear the table
   * 
   * @private
   * @memberof EmployeeDataTabComponent
   */
  private _clearData():void{
    this.headers=[];
    this.rowData=[[]];
  }

  /**
   * show the update form with the employee data populated
   * 
   * @param {number[]} itemCoords - the corrdinates of the cell that was dobule clicked, used to identify the employee to update
   * @memberof EmployeeDataTabComponent
   */
  showUpdateForm(itemCoords: number[]){
    this.showTableTip = (this.showTableTip===null) ? null : false;
    var row = itemCoords[0];
    this._setEmployee(
      new Employee(
        this.rowData[row][0],
        this.rowData[row][1],
        this.rowData[row][2],
        this.rowData[row][3],
        this.rowData[row][4],
        this.rowData[row][5],
        this.rowData[row][6],
        this.rowData[row][7],
        this.rowData[row][8],
        this.rowData[row][9])
    )
    this.overlayVisibilityManager.activate("updateForm");
  }

  /**
   * show the form to add an employee
   * 
   * @memberof EmployeeDataTabComponent
   */
  addEmployee(){
    this.showTips = false;
    this._setEmployee(null);
    this.overlayVisibilityManager.activate("updateForm");
  }

  /**
   * show the form to update the filter
   * 
   * @memberof EmployeeDataTabComponent
   */
  showFilterForm(){
    this.showTableTip = (this.showTableTip===null) ? null : false;
    this.showTips = false;
    this.overlayVisibilityManager.activate("filterForm");
  }

  /**
   * handle an error in a request
   * 
   * @private
   * @param {Error} e - the error message
   * @memberof EmployeeDataTabComponent
   */
  private _handleError(e: Error){
    alert("an error occured, please reload " + e);
  }

  /**
   * set the employee to update
   * 
   * @private
   * @param {Employee} employee - the data of the employee to update
   * @memberof EmployeeDataTabComponent
   */
  private _setEmployee(employee:Employee){
    if(employee===null){
      this._employee = new Employee(null, null, null, null, null, null, null, null, null, null);
    }else{
      this._employee = employee;
    }
    
    this.employeeSnapshot = JSON.parse(JSON.stringify(this._employee));
  }
}
