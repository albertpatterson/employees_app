import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  inputs: ["headersJson",
            "rowDataJson"]
})
export class DataTableComponent implements OnChanges {

  public headersJson: string;
  public rowDataJson: string;
  public headers: string[];
  public rowData: string[][];

  constructor() { }

  ngOnChanges() {
    this.headers=JSON.parse(this.headersJson);
    this.rowData=JSON.parse(this.rowDataJson);
  }

}
