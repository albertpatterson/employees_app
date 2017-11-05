import { Component, OnInit } from '@angular/core';

import { SingleActivationManager } from "./utils/SingleActivationManager";

/**
 * tabs shown on the page
 */
const tabs: string[] = ["employeesData", "rawTables"];

/**
 * component defining the two tabs to display - detailed employee data and raw tables
 * 
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'employee-manager',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  /**
   * SingleActivationManager used to show either the detailed employee data or the raw tables
   * without destroying the non-showing item
   * 
   * @type {SingleActivationManager}
   * @memberof AppComponent
   */
  public tabDisplayManager: any;

  /**
   * indicates if the tooltips should be shown
   * 
   * @type {boolean}
   * @memberof AppComponent
   */
  public showTips: boolean = true;

  constructor(){}

  ngOnInit(){
    this.tabDisplayManager = new SingleActivationManager(tabs, "block", "none");  
  }

  /**
   * Show the detailed employee data tab
   * 
   * @memberof AppComponent
   */
  public showEmployeeDataTab(){
    this.tabDisplayManager.activate('employeesData');
    this.showTips=false;
  }

  /**
 * Show the raw tables tab
 * 
 * @memberof AppComponent
 */
  public showRawTablesTab(){
    this.tabDisplayManager.activate('rawTables');
    this.showTips=false;
  }
}
