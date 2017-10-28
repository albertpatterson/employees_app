import { Component, OnInit} from '@angular/core';

import { DatabaseService } from '../services/database.service';

import { Employee } from "../utils/Employee";
import { Filter } from "../utils/Filter";
import { OverlayVisibilityManager } from "../utils/OverlayVisibilityManager";


const overlays: string[] = ["updateForm", "filterForm"];

@Component({
  selector: 'app-employee-data-tab',
  templateUrl: './employee-data-tab.component.html',
  styleUrls: ['./employee-data-tab.component.css'],
})
export class EmployeeDataTabComponent implements OnInit{

  public headers: string[];
  public rowData: string[][];

  public employee: Employee;
  public filter: Filter;
  public overlayVisibilityManager: OverlayVisibilityManager;
  public loading: boolean;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(){
    this.employee = new Employee(null, null, null, null, null,null, null, null, null, null);
    this.filter = new Filter(true, true, 1e3);
    this.overlayVisibilityManager = new OverlayVisibilityManager(overlays);
    this.loading = false;
  }

  updateEmployee(employee: Employee): void{
    console.log(employee);
  }

  fetchData(){
    console.log(this.filter);
    this._clearData();
    this.loading = true;
    this.databaseService.getFullEmployeeData(this.filter)
    .then(data=>{this._updateData(data); this.loading=false;})
    .catch(e=>console.log(e));
  }

  private _updateData(data: any):void{
    this.headers=data.columnNames;
    this.rowData=data.data;
    this.overlayVisibilityManager.hideAll();
  }
  private _clearData():void{
    this.headers=[];
    this.rowData=[[]];
  }

  showUpdateForm(itemCoords: number[]){    
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
    
    this.overlayVisibilityManager.show("updateForm");
  }

  addEmployee(){
    this.employee = new Employee(null,null,null,null,null,null,null,null,null,null);
    this.overlayVisibilityManager.show("updateForm");
  }

  showFilterForm(){
    this.overlayVisibilityManager.show("filterForm");
  }
}
