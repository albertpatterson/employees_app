import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../services/database.service';

import { Employee } from "../utils/Employee";

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css'],
})
export class CustomTabComponent implements OnInit {

  // public headersJson: string;
  // public rowDataJson: string;
  public headers: string[];
  public rowData: string[][];

  public employee: Employee = new Employee(null, null, null, null, null,null, null, null, null, null);

  public formVisibility: string = "hidden";

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
      this.databaseService.getFullEmployeeData()
      .then(data=>this.showTable(data))
      .catch(e=>console.log(e));
  }

  showTable(data: any):void{
    this.headers=data.columnNames;
    this.rowData=data.data;
  }

  showFormForEmployee(itemCoords: number[]){
    console.log(itemCoords);
    console.log(this.formVisibility);
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

    this.formVisibility = "visible";
  }
}
