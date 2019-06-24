import { Injectable } from '@angular/core';
import { TodoModel } from './models/todo-model'
import { todoSamples } from '../assets/todo-samples'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: TodoModel[] = todoSamples;
  key = 'TodoList';
  test;
  constructor() { }

  addTodo(todo: TodoModel) {
    this.getAllTodos();
    const uuidv4 = require('uuid/v4');
    todo.id = uuidv4();
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
  getTodo(id : number) : TodoModel {
    this.test = new TodoModel;
    this.getAllTodos();
    this.todos.forEach( x => {
      if (x.id === id) {
        this.test = x;
      }     
    });
    return this.test;
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

  editTodo(todo: TodoModel, variable: string, edit?: any) {
    this.getAllTodos();
    this.todos.forEach(x => {
      if (x.id === todo.id) {
        if (variable === 'title') {
          x.title = edit;
        } else if (variable === 'isDone') {
          x.isDone = !x.isDone;
        } else if (variable === 'description') {
          x.description = edit;
        } else if (variable === 'deadline') {
          x.deadline = edit;
        } else if (variable === 'priority') {
          x.priority = edit;
        }
      }
      sessionStorage.setItem(this.key, JSON.stringify(this.todos));
    });
  } 

  toggleComplete(todo: TodoModel) {
    this.getAllTodos();
    this.todos.forEach(x => {
      if(x.id === todo.id){
        x.isDone = !x.isDone;
        sessionStorage.setItem(this.key, JSON.stringify(this.todos));
      }
    });
  }

  updateTodo(todo: TodoModel){
    this.getAllTodos();
    this.todos.forEach( x => {
      if(x.id === todo.id){
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
