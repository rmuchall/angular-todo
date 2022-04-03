import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from "../services/todo.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    TodoComponent
  ],
  providers: [
    TodoService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoComponent
  ]
})
export class FeaturesModule { }
