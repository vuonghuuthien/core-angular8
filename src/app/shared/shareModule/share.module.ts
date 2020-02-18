import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from '../_directives/loading/loading.component';
import {AuthService} from '../_service/auth.service';
import {ShareService} from './share.service';
import {MaxlenghtImagePipe} from '@shared/_pipes/maxlenght-image.pipe';
import {PaginationComponent} from '@shared/components/pagination/pagination.component';
import {SafeHtmlPipe} from '@shared/_pipes/safeHtml.pipe';

const PIPES = [MaxlenghtImagePipe, SafeHtmlPipe];
const COMPONENTS = [PaginationComponent];

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LoadingComponent,
        ...COMPONENTS,
        ...PIPES

    ],
    exports: [
        LoadingComponent,
        ...COMPONENTS,
        ...PIPES
    ],
    providers: [
        AuthService,
    ]
})
export class ShareModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ShareModule,
            providers: [ShareService]
        };
    }
}
