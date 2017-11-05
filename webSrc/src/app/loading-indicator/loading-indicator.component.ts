import { Component } from '@angular/core';

/**
 * define a simple spinner to indicate that the app is loading data
 * 
 * @export
 * @class LoadingIndicatorComponent
 */
@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css'],
})
export class LoadingIndicatorComponent  {
  constructor() { }
}
