import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { AuthGuard } from '@shared/_guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
      //{path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
