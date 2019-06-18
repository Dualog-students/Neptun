import { Injectable } from '@angular/core';
import { TodoModel, priorityType } from './models/todo-model'
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { AppModule } from './app.module'
import { todoSamples } from '../assets/todo-samples'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: TodoModel[] = todoSamples;

  constructor(){ }

  addTodo(todo: TodoModel) {
    this.todos.push(todo);
  }

  testAddTodo() {
    let todo = new TodoModel();
    todo.title = "Testing todos";
    todo.description = "Go to the store";
    todo.dateAdded = Date.now();
    todo.deadline = 0;
    todo.isDone = false;
    todo.priority = 0;
    this.todos.push(todo);
  }

  getAllTodos() {
    return this.todos;
  }

  deleteTodo(todo: TodoModel) {
    this.todos = this.todos.filter(x => x !== todo);
  }

  toggleCompleted(todo: TodoModel) {
    this.todos.forEach(x => {
      if(x === todo)
      {
        x.isDone = !x.isDone;
      }
    });
  }

  editTodo(todo: TodoModel, variable: string, edit: any) {
    this.todos.forEach(x => {
      if(x === todo)
      {
        if(variable === "title")
        {
          x.title = edit;
        }
        else if(variable === "description")
        {
          x.description = edit;
        }
        else if(variable === "deadline")
        {
          x.deadline = edit;
        }
        else if(variable === "priority")
        {
          x.priority = edit;
        }
      }
    });
  }
}
