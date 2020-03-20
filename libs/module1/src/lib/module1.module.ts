import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Routable1Component } from './routable1/routable1.component';
import { Module1RoutingModule } from './module1-routing.module';
import { Modal1Component } from './modal1/modal1.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [Routable1Component, Modal1Component]
})
export class Module1Module {}
