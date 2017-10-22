import { Component, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  inputs: [ "title",
            "items"],
  outputs: ["selection"]
})
export class DropdownComponent implements OnChanges {

  public items: string;
  public title: string;

  public selection: EventEmitter<string> = new EventEmitter();

  public itemsArr: string[];

  constructor() { }

  ngOnChanges() {
    
    this.itemsArr = this.items.split(',');
    this.itemsArr = this.itemsArr.map(
      function(item){return item.trim()}
    );
    this.itemsArr.forEach(i=>console.log(i));
  }

  public select(event): void{
    let selection =event.target.innerText;
    console.log(selection)
    this.selection.next(selection);
  }
}
