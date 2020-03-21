import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Routable1Component } from './components/routable1/routable1.component';
import { Module1RoutingModule } from './module1-routing.module';
import { Modal1Component } from './components/modal1/modal1.component';
import {
  Factory1Component,
  Factory2Component,
  Factory3Component,
  Factory4Component,
  Factory5Component,
  Factory6Component,
  Factory7Component,
  Factory8Component,
  Content1Component,
  Content2Component,
  Content3Component,
  Content4Component,
  Content5Component,
  Content6Component,
  Content7Component,
  Content8Component,
  Content9Component,
  Content10Component,
  Content11Component,
  Content12Component,
  Content13Component,
  Content14Component,
  Content15Component,
  Content16Component
} from './components/content-factory';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    Routable1Component,
    Modal1Component,
    Factory1Component,
    Factory2Component,
    Factory3Component,
    Factory4Component,
    Factory5Component,
    Factory6Component,
    Factory7Component,
    Factory8Component,
    Content1Component,
    Content2Component,
    Content3Component,
    Content4Component,
    Content5Component,
    Content6Component,
    Content7Component,
    Content8Component,
    Content9Component,
    Content10Component,
    Content11Component,
    Content12Component,
    Content13Component,
    Content14Component,
    Content15Component,
    Content16Component
  ]
})
export class Module1Module {}
