import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
// import { Module1Module } from '@ie11-i18n/module1';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'module1',
    // loadChildren: () => Module1Module
    loadChildren: () => import('@ie11-i18n/module1').then(m => m.Module1Module)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
      // onSameUrlNavigation: 'reload',
      // scrollPositionRestoration: 'disabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
