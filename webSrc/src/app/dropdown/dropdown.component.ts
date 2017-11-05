import { Component, EventEmitter } from '@angular/core';

/**
 * component defining a custom drop down menu
 * 
 * @export
 * @class DropdownComponent
 */
@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  inputs: [ "title",
            "items"],
  outputs: ["selection"]
})
export class DropdownComponent {
  /**
   * items to display in the menu
   * 
   * @type {string[]}
   * @memberof DropdownComponent
   */
  public items: string[];

  /**
   * label of the dropdown menu
   * 
   * @type {string}
   * @memberof DropdownComponent
   */
  public title: string;

  /**
   * event emmitter for item selection event
   * 
   * @type {EventEmitter<string>}
   * @memberof DropdownComponent
   */
  public selection: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public select(event): void{
    let selection =event.target.innerText;
    console.log(selection)
    this.selection.next(selection);
  }
}
