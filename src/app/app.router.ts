import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

export const appRouter: Routes = [
    {path: "", loadChildren: () => import('./pages/layout/layout.module').then(t => t.LayoutModule)},
    {path: "login", loadChildren: () => import('./../app/pages/auth/auth.module').then(t => t.AuthModule)},
    {path: "**", redirectTo: "", pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRouter, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
