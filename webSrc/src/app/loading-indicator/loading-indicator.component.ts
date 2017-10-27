import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css'],
  inputs:[
    "visibility"
  ]
})
export class LoadingIndicatorComponent implements OnInit {


  public visibility: string;

  constructor() { }

  ngOnInit() {
  }

}
