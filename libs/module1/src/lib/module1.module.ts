import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Routable1Component } from './components/routable1/routable1.component';
import { Module1RoutingModule } from './module1-routing.module';
import { Modal1Component } from './components/modal1/modal1.component';
import { Factory1Component } from './components/factory1/factory1.component';
import { Content1Component } from './components/content1/content1.component';
import { Content2Component } from './components/content2/content2.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [Routable1Component, Modal1Component, Factory1Component, Content1Component, Content2Component]
})
export class Module1Module {}
