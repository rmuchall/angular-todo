import { Injectable } from '@angular/core';
import { TodoDto } from "../dtos/TodoDto";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: TodoDto[] = [
    {description: "TestOne"},
    {description: "TestTwo"},
    {description: "TestThree"},
  ];

  addTodo(todoDto: TodoDto) {
    console.log("addTodo()");
  }

  deleteTodo(todo: TodoDto) {
    console.log("deleteTodo()");
  }

  refreshTodos() {
    console.log("refreshTodos()");
  }

}
