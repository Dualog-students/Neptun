import { Injectable } from '@angular/core';
import { TodoModel, priorityType } from './models/todo-model'
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import todoSamples from '../assets/todo-samples.json';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: TodoModel[] = todoSamples;

  constructor() { 

  }

  addTodo(todo: TodoModel) {
    this.todos.push(todo);
  }

  testAddTodo() {
    let todo = new TodoModel();
    todo.title = "Get groceries";
    todo.description = "Go to the store";
    todo.dateAdded = 319480923.0;
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

  sortDateAddedNewest() {
    this.todos.sort((a, b) => a.dateAdded - b.dateAdded);
  }

  sortDateAddedOldest() {
    this.todos.sort((a, b) => b.dateAdded - a.dateAdded);
  }

  sortDeadlineNewest() {
    this.todos.sort((a, b) => a.deadline - b.deadline);
  }

  sortDeadlineOldest() {
    this.todos.sort((a, b) => b.deadline - a.deadline);
  }

  sortPriorityLow() {
    this.todos.sort((a, b) => a.priority - b.priority);
  }

  sortPriorityHigh() {
    this.todos.sort((a, b) => b.priority - a.priority);
  }
}
