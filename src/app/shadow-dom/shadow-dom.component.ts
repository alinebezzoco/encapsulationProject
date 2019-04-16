import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadow-dom',
  template: `<p>Teste com ShadowDOM</p>`,
  styles: [`p { color: brown }`]
})
export class ShadowDomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
