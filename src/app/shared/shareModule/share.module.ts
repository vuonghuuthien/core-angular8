import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareService } from './share.service';
import { LoadingComponent } from '@shared/_directives/loading/loading.component';
import { AuthService } from '@shared/_service/auth.service';
import { MaxlengthImagePipe } from '@shared/_pipes/maxlength-image.pipe';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { SafeHtmlPipe } from '@shared/_pipes/safeHtml.pipe';

const PIPES = [MaxlengthImagePipe, SafeHtmlPipe];
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
        }
    }
}