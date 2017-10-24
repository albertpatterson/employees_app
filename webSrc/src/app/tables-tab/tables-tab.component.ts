import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/database.service';


@Component({
  selector: 'app-tables-tab',
  templateUrl: './tables-tab.component.html',
  styleUrls: ['./tables-tab.component.css']
})
export class TablesTabComponent implements OnInit {

  public tableNamesString: string = 'nothing';
  public headersJson: string = "[]";
  public rowDataJson: string = "[[]]";


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
      this.headersJson=JSON.stringify(data.columnNames);
      this.rowDataJson=JSON.stringify(data.data);
      console.log(data);
    });
  }
}
