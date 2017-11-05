import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/database.service';

/**
 * defines the tab displaying the raw table data
 * 
 * @export
 * @class TablesTabComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-tables-tab',
  templateUrl: './tables-tab.component.html',
  styleUrls: ['./tables-tab.component.css'],
  inputs:["display"]
})
export class TablesTabComponent implements OnInit {

  /**
   * indicates if the display of the tab should be "block" or "none"
   * 
   * @type {string}
   * @memberof TablesTabComponent
   */
  public display: string;

  /**
   * names of the tables stored in the database
   * 
   * @type {string[]}
   * @memberof TablesTabComponent
   */
  public tableNames: string[] = [];

  /**
   * headers for of the table being shown
   * 
   * @type {string[]}
   * @memberof TablesTabComponent
   */
  public headers: string[];

  /**
   * data in the table being shown
   * 
   * @type {string [][]}
   * @memberof TablesTabComponent
   */
  public rowData: string [][];

  /**
   * Creates an instance of TablesTabComponent.
   * @param {DatabaseService} databaseService 
   * @memberof TablesTabComponent
   */
  constructor(private databaseService: DatabaseService) { }

  /**
   * get the names of the tables in the database on init
   * 
   * @memberof TablesTabComponent
   */
  ngOnInit() {
      this.databaseService.getTableNames()
      .then(names=>{
        this.tableNames = names;
      })
      .catch(e=>this._handleError(e));
  }

  /**
   * show the table data
   * 
   * @param {string} tableName 
   * @memberof TablesTabComponent
   */
  public showTable(tableName: string):void{
    this.databaseService.getTableData(tableName)
    .then(data=>{
      this.headers=data.columnNames;
      this.rowData=data.data;
    });
  }

  private _handleError(e: Error){
    alert("An Errr occured, please reload: "+e.message);
  }
}
