import { Injectable } from '@angular/core';
import { TodoDto } from "../dtos/TodoDto";
import { HttpClient } from "@angular/common/http";
import { ScalarResultDto } from "../dtos/ScalarResultDto";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: TodoDto[] = [];

  constructor(private http: HttpClient) {
  }

  async addTodo(todoDto: TodoDto) {
    console.log("addTodo()")
    this.http.post("http://localhost:5001/api/todo", todoDto)
      .subscribe(async value => {
        await this.refreshTodos();
      });
  }

  async deleteTodo(todoDto: TodoDto) {
    console.log("deleteTodo()")
    this.http.delete<ScalarResultDto>("http://localhost:5001/api/todo", {
      body: todoDto
    }).subscribe(async value => {
      await this.refreshTodos();
    });
  }

  async refreshTodos() {
    console.log("refreshTodo()")
    await this.http.get<TodoDto[]>("http://localhost:5001/api/todo")
      .subscribe(value => {
        this.todos = value;
      });
  }
}
