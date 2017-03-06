import { Component } from '@angular/core';

@Component({
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
  // sử dụng file css ở ngoài 
   styleUrls: ['./tutorial.component.css'],
  // styles: [`.redColor {
  //     color:red;
  // }`]
})
export class TutorialComponent {
  title = 'Sub Component';
  public applyClass = true;
  public blueColor = false;

  // one way binding
  public image = "http://lorempixel.com/300/300";
  public welcomeText = "Welcome to Angular 2 for Beginers";

  // function onClick cho Event Binding 
  onClick(value) {
    console.log(value);
  }

  // Directives ngIf
  public showLineIf = true;

  // ngSwitch
  public color =  "red";

  // ngFor 
 public colors: string[] = ["red", "blue", "green"]; 

 // EX: Attribute Directives
 // ngClass
 public cOne = false;
 public cTwo = false;
 onTouch() {
  this.cOne = !this.cOne;
  this.cTwo = !this.cTwo;
 }
 // ngStyle
 public size = '30px';
 public style = "italic";

}
