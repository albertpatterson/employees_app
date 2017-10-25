import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.css'],
})
export class CustomTabComponent implements OnInit {

  public headersJson: string;
  public rowDataJson: string;

  public formVisibility: string = "hidden";

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
      this.databaseService.getFullEmployeeData()
      .then(data=>this.showTable(data))
      .catch(e=>console.log(e));
  }

  showTable(data: any):void{
    this.headersJson=JSON.stringify(data.columnNames);
    this.rowDataJson=JSON.stringify(data.data);
  }

  doUpdate(itemCoords: number[]){
    console.log(itemCoords);
    console.log(this.formVisibility);
    this.formVisibility = "visible";
  }
}
