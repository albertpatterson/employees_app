import { Component, OnInit } from '@angular/core';
import {DatabaseServiceService} from '../services/database-service.service';


@Component({
  selector: 'app-tables-tab',
  templateUrl: './tables-tab.component.html',
  styleUrls: ['./tables-tab.component.css']
})
export class TablesTabComponent implements OnInit {

  public tableNamesString: string = 'nothing';
  public headersJson: string = "[]";
  public rowDataJson: string = "[[]]";


  constructor(private databaseServiceService: DatabaseServiceService) { }

  ngOnInit() {
      this.databaseServiceService.getTableNames()
      .then(names=>{
        this.tableNamesString=names.join(",");
      })
      .catch(e=>console.log(e));
  }

  public showTable(tableName: string):void{
    this.databaseServiceService.getTableData(tableName)
    .then(data=>{
      this.headersJson=JSON.stringify(data.columnNames);
      this.rowDataJson=JSON.stringify(data.data);
      console.log(data);
    });
  }
}
