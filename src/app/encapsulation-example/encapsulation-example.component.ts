import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-emulated',
  template: `<p>Teste com Emulated</p>`,
  styles: [`p { color: red; }`], 
  encapsulation: ViewEncapsulation.Emulated
})
export class EncapsulationExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
