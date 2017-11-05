import { Component, OnInit ,EventEmitter} from '@angular/core';

/**
 * defines a tooltip to be shown on the page for instructional purposes
 * 
 * @export
 * @class TooltipComponent
 * @implements {OnInit}
 */
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

  /**
   * the tooltip's width style property
   * 
   * @type {string}
   * @memberof TooltipComponent
   */
  public width: string;
  
  /**
   * the tooltip's left style property
   * 
   * @type {string}
   * @memberof TooltipComponent
   */
  public left: string;

  /**
   * the tooltip's right style property
   * 
   * @type {string}
   * @memberof TooltipComponent
   */
  public right: string;
  
  /**
   * the tooltip's top style property
   * 
   * @type {string}
   * @memberof TooltipComponent
   */
  public top: string;
  
  /**
   * the tooltip's bottom style property
   * 
   * @type {string}
   * @memberof TooltipComponent
   */
  public bottom: string;
  
  /**
   * the message to display in the tooltip
   * 
   * @type {string}
   * @memberof TooltipComponent
   */
  public message: string;
  
  /**
   * the tooltip's visibility style property
   * 
   * @type {string}
   * @memberof TooltipComponent
   */
  public visibility: string;
  
  /**
   * defines the loction of the arrow (bottom or top)
   * 
   * @type {string}
   * @memberof TooltipComponent
   */
  public arrowLocation: string;

  /**
   * event emitter for the exit tooltip event
   * 
   * @type {EventEmitter<null>}
   * @memberof TooltipComponent
   */
  public onExit: EventEmitter<null> = new EventEmitter();
  
  constructor() {}

  /**
   * ensure all properties have valid valued
   * 
   * @memberof TooltipComponent
   */
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

  /**
   * hide the tooltip and emit the exit event
   * 
   * @memberof TooltipComponent
   */
  public exit(): void{
    this.visibility = "hidden";
    this.onExit.next();
  }

}
