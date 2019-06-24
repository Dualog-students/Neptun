import { Injectable } from '@angular/core';
import { TodoModel } from './models/todo-model'
import { todoSamples } from '../assets/todo-samples'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: TodoModel[] = todoSamples;
  key = 'TodoList';

  constructor() { }

  addTodo(todo: TodoModel) {
    this.getAllTodos();
    const uuidv4 = require('uuid/v4');
    todo.id = uuidv4();
    todo.isDone = false;
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

  toggleComplete(todo: TodoModel) {
    todo.isDone = !todo.isDone;
    this.updateTodo(todo);
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
}
