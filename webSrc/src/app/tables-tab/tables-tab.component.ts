import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/database.service';


@Component({
  selector: 'app-tables-tab',
  templateUrl: './tables-tab.component.html',
  styleUrls: ['./tables-tab.component.css'],
  inputs:["display"]
})
export class TablesTabComponent implements OnInit {

  public display: string;

  public tableNamesString: string = 'nothing';
  public headers: string[];
  public rowData: string [][];

  


  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
      this.databaseService.getTableNames()
      .then(names=>{
        this.tableNamesString=names.join(",");
      })
      .catch(e=>console.log(e));
  }

  public showTable(tableName: string):void{
    this.databaseService.getTableData(tableName)
    .then(data=>{
      this.headers=data.columnNames;
      this.rowData=data.data;
      console.log(data);
    });
  }
}
