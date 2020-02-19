import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NotfoundComponent} from '@shared/components/notfound/notfound.component';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {appRouter, AppRoutingModule} from './app.router';
import {ShareModule} from '@shared/shareModule/share.module';
import {AuthGuard} from '@shared/_guards/auth.guard';
import {JwtInterceptor} from '@shared/_helpers/jwt.interceptor';
import {ErrorInterceptor} from '@shared/_helpers/error.interceptor';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent,
    ],
    imports:
        [
            CommonModule,
            BrowserAnimationsModule,
            FormsModule,
            HttpClientModule,
            AppRoutingModule,
            ShareModule,

        ],
    providers: [
        AuthGuard,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}