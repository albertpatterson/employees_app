import { Component } from '@angular/core';

@Component({
  selector: 'employee-manager',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public view: string = "none";

  public setView(view: string): void{
    this.view = view;
  }
}
