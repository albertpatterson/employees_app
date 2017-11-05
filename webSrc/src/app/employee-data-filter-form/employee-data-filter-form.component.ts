import { Component, OnChanges, EventEmitter } from '@angular/core';

import { Employee } from "../utils/Employee";
import { Filter } from "../utils/Filter";


/**
 * component defining a form to choose filters for the employee data
 * 
 * @export
 * @class EmployeeDataFilterFormComponent
 * @implements {OnChanges}
 */
@Component({
  selector: 'app-employee-data-filter-form',
  templateUrl: './employee-data-filter-form.component.html',
  styleUrls: ['./employee-data-filter-form.component.css'],
  inputs: [
    "filter",
    "visibility"
  ],
  outputs: [
    "filterChanged",
    "visibilityChange"    
  ]
})
export class EmployeeDataFilterFormComponent implements OnChanges {

  /**
   * the filter to apply when requesting employee data
   * 
   * @type {Filter}
   * @memberof EmployeeDataFilterFormComponent
   */
  public filter: Filter;
  
  /**
   * indicates if this form is visible
   * 
   * @type {string}
   * @memberof EmployeeDataFilterFormComponent
   */
  public visibility: string = "visible";
  
  /**
   * The title to display with the form
   * 
   * @type {string}
   * @memberof EmployeeDataFilterFormComponent
   */
  public formTitle: string = "Filter Employee Data";

  /**
   * emmitter for the form changed event
   * 
   * @type {EventEmitter<Filter>}
   * @memberof EmployeeDataFilterFormComponent
   */
  public filterChanged:EventEmitter<Filter> = new EventEmitter();
  
  /**
   * emitter for the visibility changed event
   * 
   * @type {EventEmitter<string>}
   * @memberof EmployeeDataFilterFormComponent
   */
  public visibilityChange: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  /**
   * ensure that a valid vilter is being used
   * 
   * @memberof EmployeeDataFilterFormComponent
   */
  ngOnChanges() {
      this.filter = this.filter || new Filter(true, true, 1e3);
  }

  /**
   * submit the update to the filter
   * 
   * @memberof EmployeeDataFilterFormComponent
   */
  onSubmit(){
    this.filterChanged.next(this.filter);
    this.hide();
  }

  /**
   * hide the form
   * 
   * @memberof EmployeeDataFilterFormComponent
   */
  hide(){
    this.visibility="hidden";
    this.visibilityChange.next(this.visibility);
  }

  /**
   * show the form
   * 
   * @memberof EmployeeDataFilterFormComponent
   */
  show(){
    this.visibility="visible";
    this.visibilityChange.next(this.visibility);
  }
}