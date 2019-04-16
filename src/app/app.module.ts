import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncapsulationExampleComponent } from './encapsulation-example/encapsulation-example.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { EncapsulationNoneComponent } from './encapsulation-none/encapsulation-none.component';

@NgModule({
  declarations: [
    AppComponent,
    EncapsulationExampleComponent,
    ShadowDomComponent,
    EncapsulationNoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
