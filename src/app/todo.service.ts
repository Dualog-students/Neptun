import { Injectable } from '@angular/core';
import { TodoModel, todoStatus } from './models/todo-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: TodoModel[];
  key = 'TodoList';

  constructor() { }

  addTodo(todo: TodoModel) {
    this.getAllTodos();
    const uuidv4 = require('uuid/v4');
    todo.id = uuidv4();
    todo.isDone = todoStatus.notCompleted;
    this.todos.push(todo);
    sessionStorage.setItem(this.key, JSON.stringify(this.todos));
  }

  getAllTodos() {
    const list = JSON.parse(sessionStorage.getItem(this.key));
    if (list === null) {
      this.todos = [];
    } else {
      this.todos = list;
    }
    return this.todos;
  }

  getTodo(id: number): TodoModel {
    let todo = new TodoModel;
    this.getAllTodos();
    this.todos.forEach(x => {
      if (x.id === id) {
        todo = x;
      }
    });
    return todo;
  }

  deleteTodo(todo: TodoModel) {
    this.getAllTodos();
    this.todos.forEach(x => {
      if (x.id === todo.id) {
        // Remove item from this.todoslist
        this.todos.splice(this.todos.indexOf(todo), 1);
        // Rewrite the new list to session storage
        sessionStorage.setItem(this.key, JSON.stringify(this.todos));
      } else {
        // Error - but nothing really happens here, heh
        console.log('item is not in the list');
      }
    });
  }

  updateTodo(todo: TodoModel) {
    this.getAllTodos();
    this.todos.forEach(x => {
      if (x.id === todo.id) {
        x.id = todo.id;
        x.title = todo.title;
        x.description = todo.description;
        x.priority = todo.priority;
        x.deadline = todo.deadline;
        x.isDone = todo.isDone;
        sessionStorage.setItem(this.key, JSON.stringify(this.todos));
      }
    });
  }

  get_Todos_Length(): number {
    return this.todos.length;
  }
}
