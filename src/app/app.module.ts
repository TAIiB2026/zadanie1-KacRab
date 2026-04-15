import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { ReactorListComponent } from "./reactor-list/reactor-list.component";

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactorListComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
