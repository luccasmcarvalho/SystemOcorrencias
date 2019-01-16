import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SapoMapasAPIComponent } from './sapo-mapas-api/sapo-mapas-api.component';

@NgModule({
  declarations: [
    AppComponent,
    SapoMapasAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
