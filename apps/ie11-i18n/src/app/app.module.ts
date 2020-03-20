import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
