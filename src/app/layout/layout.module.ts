import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    LayoutRoutingModule,
    FormsModule
  ]
})
export class LayoutModule { }
