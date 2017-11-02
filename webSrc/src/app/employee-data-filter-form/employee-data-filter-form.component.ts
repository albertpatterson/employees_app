import { Component, OnChanges, EventEmitter } from '@angular/core';

import { Employee } from "../utils/Employee";
import { Filter } from "../utils/Filter";

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

  public filter: Filter;
  public visibility: string = "visible";
  
  public formTitle: string = "Add New Employee"

  public filterChanged:EventEmitter<Filter> = new EventEmitter();
  public visibilityChange: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnChanges() {
      this.filter = this.filter || new Filter(true, true, 1e3);
      this.formTitle = "Filter Employee Data";
  }


  onSubmit(){
    // this.filter.genderF = event.
    // console.log(event);
    this.filterChanged.next(this.filter);
    this.hide();
  }

  hide(){
    this.visibility="hidden";
    this.visibilityChange.next(this.visibility);
    
  }

  show(){
    this.visibility="visible";
    this.visibilityChange.next(this.visibility);
  }

}