import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-none',
  template: `<p>Teste com None</p>`,
  styles: [`p { color: green }`], 
  encapsulation: ViewEncapsulation.None
})
export class EncapsulationNoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
