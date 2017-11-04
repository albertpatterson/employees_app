import { Component, OnInit ,EventEmitter} from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  inputs: [
    "width", 
    "left",
    "right",
    "top",
    "bottom",
    "message",
    "visibility",
    "arrowLocation"
  ],
  outputs: [
    "onExit"
  ]
})
export class TooltipComponent implements OnInit {

  public width: string;
  public left: string;
  public right: string;
  public top: string;
  public bottom: string;
  public message: string;
  public visibility: string;
  public arrowLocation: string;

  public onExit: EventEmitter<null> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
    this.width = this.width || "";
    this.left = this.left || null;
    this.right = this.right || null;
    this.top = this.top || null;
    this.bottom = this.bottom || null;
    this.message = this.message || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.";
    this.visibility = this.visibility || "visible";
    this.arrowLocation = this.arrowLocation || "bottom";
  }

  public exit(): void{
    this.visibility = "hidden";
    this.onExit.next();
  }

}
