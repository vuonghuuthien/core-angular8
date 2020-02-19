import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const appRouter: Routes = [
    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
    { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
 
@NgModule({
    imports: [RouterModule.forRoot(appRouter, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}