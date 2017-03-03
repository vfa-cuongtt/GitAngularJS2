import { Component } from '@angular/core';

@Component({
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
//   styleUrls: ['./app.component.css'],
  styles: [`.redColor {
      color:red;
  }`]
})
export class TutorialComponent {
  title = 'Sub Component';
  public applyClass = true;
  public blueColor = false;
}
