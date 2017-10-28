import { Component, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  inputs: ["headers",
            "rowData"],
  outputs: [
    "cellDblClick"
    ]
})
export class DataTableComponent implements OnChanges {

  public headers: string[];
  public rowData: string[][];
  public cellDblClick: EventEmitter<number[]> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
  }

  dblClick(event): void{
    var target = event.target;
    var col = target.dataset.col;
    var row = target.dataset.row;
    this.cellDblClick.next([row, col]);
    event.preventDefault();
  }

  // edit(event): void{
  //   var target = event.target;
  //   var txt = target.innerText;
  //   var col = target.dataset.col;
  //   var parent = target.parentElement;
  //   var emp_no = parent.children[0].innerText;

  //   console.log(event, target, txt, col, parent, emp_no);
  // }

}
