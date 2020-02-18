import {NgModule} from '@angular/core';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [LayoutComponent, HeaderComponent, FooterComponent],
    imports: [
        FormsModule,
        CalendarModule,
        LayoutRoutingModule,
    ]
})
export class LayoutModule {
}
