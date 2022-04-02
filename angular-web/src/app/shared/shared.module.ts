import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeaderComponent } from './shared-header/shared-header.component';
import { SharedFooterComponent } from './shared-footer/shared-footer.component';

@NgModule({
  declarations: [
    SharedHeaderComponent,
    SharedFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedHeaderComponent,
    SharedFooterComponent
  ]
})
export class SharedModule { }
