import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.scss'], 
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'encapsulationProject';
}
