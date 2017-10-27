import { Component } from '@angular/core';

import { DatabaseService } from '../services/database.service';

import { Employee } from "../utils/Employee";
import { Filter } from "../utils/Filter";

@Component({
  selector: 'app-employee-data-tab',
  templateUrl: './employee-data-tab.component.html',
  styleUrls: ['./employee-data-tab.component.css'],
})
export class EmployeeDataTabComponent {


  public headers: string[];
  public rowData: string[][];

  public employee: Employee = new Employee(null, null, null, null, null,null, null, null, null, null);
  public filter: Filter = new Filter(true, true, 1e3);

  public updateFormVisibility: string = "hidden";
  public filterFormVisibility: string = "hidden";

  constructor(private databaseService: DatabaseService) { }

  updateEmployee(employee: Employee): void{
    console.log(employee);
  }

  fetchData(){
    console.log(this.filter);
    this._clearData();
    this.databaseService.getFullEmployeeData(this.filter)
    .then(data=>this._updateData(data))
    .catch(e=>console.log(e));
  }

  private _updateData(data: any):void{
    this.headers=data.columnNames;
    this.rowData=data.data;
  }
  private _clearData():void{
    this.headers=[];
    this.rowData=[[]];
  }

  showUpdateForm(itemCoords: number[]){
    this.filterFormVisibility = "hidden";
    
    var row = itemCoords[0];
    this.employee = new Employee(
      this.rowData[row][0],
      this.rowData[row][1],
      this.rowData[row][2],
      this.rowData[row][3],
      this.rowData[row][4],
      this.rowData[row][5],
      this.rowData[row][6],
      this.rowData[row][7],
      this.rowData[row][8],
      this.rowData[row][9]
    )

    this.updateFormVisibility = "visible";
  }

  addEmployee(){
    this.filterFormVisibility = "hidden";
    this.employee = new Employee(null,null,null,null,null,null,null,null,null,null);
    this.updateFormVisibility = "visible";
  }

  showFilterForm(){
    this.updateFormVisibility = "hidden";
    this.filterFormVisibility = "visible";
  }
}
