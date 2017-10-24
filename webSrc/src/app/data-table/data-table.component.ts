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
    if(this.headersJson && this.rowDataJson){
      this.headers=JSON.parse(this.headersJson);
      this.rowData=JSON.parse(this.rowDataJson);
    }
  }

  edit(event): void{
    var target = event.target;
    var txt = target.innerText;
    var col = target.dataset.col;
    var parent = target.parentElement;
    var emp_no = parent.children[0].innerText;

    console.log(event, target, txt, col, parent, emp_no);
  }

}
