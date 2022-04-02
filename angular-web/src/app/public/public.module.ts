import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from './public-home/public-home.component';
import { PublicTodoComponent } from './public-todo/public-todo.component';

@NgModule({
  declarations: [
    PublicHomeComponent,
    PublicTodoComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PublicModule { }
