import { Component, EventEmitter } from '@angular/core';

/**
 * component defining a table for displaying and editing data
 * 
 * @export
 * @class DataTableComponent
 * @implements {OnChanges}
 */
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
export class DataTableComponent {
  
  /**
   * column headers of the table
   * 
   * @type {string[]}
   * @memberof DataTableComponent
   */
  public headers: string[];

  /**
   * data contained in the table
   * 
   * @type {string[][]}
   * @memberof DataTableComponent
   */
  public rowData: string[][];

  /**
   * emitter for double click event to trigger data edit
   * 
   * @type {EventEmitter<number[]>}
   * @memberof DataTableComponent
   */
  public cellDblClick: EventEmitter<number[]> = new EventEmitter();

  constructor() { }

  /**
   * emit the double click event with information about the cell that was clicked
   * 
   * @param {any} event 
   * @memberof DataTableComponent
   */
  dblClick(event): void{
    var target = event.target;
    var col = target.dataset.col;
    var row = target.dataset.row;
    this.cellDblClick.next([row, col]);
    event.preventDefault();
  }
}
