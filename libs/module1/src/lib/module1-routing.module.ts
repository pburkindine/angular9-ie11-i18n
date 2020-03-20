import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routable1Component } from './routable1/routable1.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Routable1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule {}
