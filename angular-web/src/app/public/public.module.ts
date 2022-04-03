import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from './public-home/public-home.component';
import { FeaturesModule } from "../features/features.module";

@NgModule({
  declarations: [
    PublicHomeComponent,
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ]
})
export class PublicModule { }
