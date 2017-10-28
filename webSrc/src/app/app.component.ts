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

  public tabDisplayManager: SingleActivationManager;

  constructor(){}

  ngOnInit(){
    this.tabDisplayManager = new SingleActivationManager(tabs, "block", "none");  
  }

  // public setView(tabName: string): void{
  //   this.tabDisplayManager.activate(tabName);
  // }
}
