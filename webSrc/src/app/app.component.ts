import { Component } from '@angular/core';

@Component({
  selector: 'employee-manager',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public view: string = "none";

  public doFullEmployeeDataFetch = false;
  public doTableNameFetch = false;

  public setView(view: string): void{
    this.view = view;
    this.doFullEmployeeDataFetch = this.view==="employees";
    this.doTableNameFetch = this.view==="rawTables";
    
  }
}
