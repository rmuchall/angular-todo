import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TodoDto } from "../../dtos/TodoDto";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoDto = new TodoDto();
  todoForm: FormGroup;

  constructor(public todoService: TodoService) {
    this.todoForm = new FormGroup({
      description: new FormControl(this.todoDto.description, [
        Validators.required,
        Validators.minLength(2)
      ]),
    });
  }

  ngOnInit(): void {
    this.todoService.refreshTodos();
  }

  get description() {
    return this.todoForm.get('description') as FormControl;
  }
}
