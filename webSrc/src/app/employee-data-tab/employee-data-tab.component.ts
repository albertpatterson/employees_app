import { Component, OnInit} from '@angular/core';

import { DatabaseService } from '../services/database.service';

import { Employee } from "../utils/Employee";
import { Filter } from "../utils/Filter";
import { SingleActivationManager } from "../utils/SingleActivationManager";


const overlays: string[] = ["updateForm", "filterForm"];

@Component({
  selector: 'app-employee-data-tab',
  templateUrl: './employee-data-tab.component.html',
  styleUrls: ['./employee-data-tab.component.css'],
  inputs:["display"]
})
export class EmployeeDataTabComponent implements OnInit{

  public display: string;

  public headers: string[];
  public rowData: string[][];

  private _employee: Employee;
  public employeeSnapshot: Employee;
  public filter: Filter;
  public overlayVisibilityManager: any;
  public loading: boolean;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(){
    this._setEmployee(null);
    this.filter = new Filter(true, true, 1e3);
    this.overlayVisibilityManager = new SingleActivationManager(overlays, "visible", "hidden");
    this.loading = false;
  }

  applyUpdate(updatedEmployee: Employee): void {
    console.log("apply update", updatedEmployee);

    let updateApplied: Promise<Employee>;
    if(this._employee.emp_no===null){
      updateApplied=this.databaseService.addEmployee(updatedEmployee)
      // .then((r)=>alert('updated '+r))
      // .catch(this._handleError)
    }else{
      updateApplied = this.updateEmployee(updatedEmployee);
    }

    updateApplied.then(employee=>this.updateEmployeeDataDisplay(employee));
  }


  updateEmployee(updatedEmployee: Employee): Promise<Employee>{
    
    let updateApplied: Promise<Employee>;

    let update={};
    for(let field in this._employee){
      if(this._employee[field]!==updatedEmployee[field]){
        update[field]=updatedEmployee[field];
      }
    }
    
    console.log("update!", this._employee, updatedEmployee, update);

    if(Object.keys(update).length>0){
      this._setEmployee(updatedEmployee);
      updateApplied = this.databaseService.updateEmployee(this._employee.emp_no, update)
      // .then(this.updateEmployeeDataDisplay)
      // .catch(this._handleError)
    }else{
      updateApplied=Promise.resolve(this._employee);
    }
    return updateApplied

  }

  updateEmployeeDataDisplay(employee: Employee){

    let emp_no_str = employee.emp_no.toString();
    let row = this.rowData.findIndex(row=>row[0]===emp_no_str);
    if(row===-1){
      row = this.rowData.length;
      this.rowData[row]=[];
    }

    console.log("update display ", employee, row);
    
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
  
  // updateEmployeeDataDisplay(){
  //   let row = this.rowData.findIndex(row=>row[0]===this._employee.emp_no);
  //   this.rowData[row][6]= this._employee.title;
  //   this.rowData[row][7]= this._employee.to_date;
  //   this.rowData[row][8]= this._employee.dept_name;
  //   this.rowData[row][9]= this._employee.salary;
  // }

  fetchData(){
    console.log(this.filter);
    this._clearData();
    this.loading = true;
    this.databaseService.getFullEmployeeData(this.filter)
    .then(data=>{this._updateData(data); this.loading=false;})
    .catch(this._handleError)
  }

  private _updateData(data: any):void{
    this.headers=data.columnNames;
    this.rowData=data.data;
    this.overlayVisibilityManager.deactivateAll();
  }
  private _clearData():void{
    this.headers=[];
    this.rowData=[[]];
  }

  showUpdateForm(itemCoords: number[]){    
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

  addEmployee(){
    this._setEmployee(null);
    this.overlayVisibilityManager.activate("updateForm");
  }

  showFilterForm(){
    this.overlayVisibilityManager.activate("filterForm");
  }

  private _handleError(e){
    console.log(e);
  }

  private _setEmployee(employee:Employee){
    if(employee===null){
      this._employee = new Employee(null, null, null, null, null, null, null, null, null, null);
    }else{
      this._employee = employee;
    }
    
    this.employeeSnapshot = JSON.parse(JSON.stringify(this._employee));
  }
}
