import { Component, OnInit } from '@angular/core';

import { SingleActivationManager } from "./utils/SingleActivationManager";

const tabs: string[] = ["employeesData", "rawTables"];

@Component({
  selector: 'employee-manager',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public doFullEmployeeDataFetch = false;
  public doTableNameFetch = false;

  public tabDisplayManager: any;

  public showTips: boolean = true;
  constructor(){}

  ngOnInit(){
    this.tabDisplayManager = new SingleActivationManager(tabs, "block", "none");  
  }


  public showEmployeeDataTab(){
    this.tabDisplayManager.activate('employeesData');
    this.showTips=false;
  }

  public showRawTablesTab(){
    this.tabDisplayManager.activate('rawTables');
    this.showTips=false;
  }

  // public setView(tabName: string): void{
  //   this.tabDisplayManager.activate(tabName);
  // }
}
