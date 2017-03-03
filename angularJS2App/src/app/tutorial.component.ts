import { Component } from '@angular/core';

@Component({
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
  // sử dụng file css ở ngoài 
//   styleUrls: ['./app.component.css'],
  styles: [`.redColor {
      color:red;
  }`]
})
export class TutorialComponent {
  title = 'Sub Component';
  public applyClass = true;
  public blueColor = false;

  // function onClick cho Event Binding 
  onClick(value) {
    console.log(value);
  }
}
