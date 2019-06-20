import { Injectable } from '@angular/core';
import { TodoModel, priorityType } from './models/todo-model'
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { AppModule } from './app.module'
import { todoSamples } from '../assets/todo-samples'
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: TodoModel[] = todoSamples;
  
  key = "TodoList";
  constructor(){ }

  addTodo(todo: TodoModel) { 
    this.getAllTodos();
    this.todos.push(todo);
    sessionStorage.setItem(this.key, JSON.stringify(this.todos));
  }

  testAddTodo() {
    let todo = new TodoModel();
    todo.title = "Testing todos";
    todo.description = "Go to the store";
    todo.dateAdded = Date.now();
    todo.deadline = 0;
    todo.isDone = false;
    todo.priority = 0;
    todo.id = 1;
    this.addTodo(todo);
  }

  getAllTodos() {
    let list = JSON.parse(sessionStorage.getItem(this.key));
    if (list === null){
      this.todos = []
    }
    else {
      this.todos = list
    }
    return this.todos;
  }

  deleteTodo(todo: TodoModel) {
    this.getAllTodos();
    this.todos.forEach(x => {
      if(x.id === todo.id ) {
        // Remove item from this.todoslist
        this.todos.splice(x.id, 1);
        // Rewrite the new list to session storage
        sessionStorage.setItem(this.key, JSON.stringify(this.todos));
      }
      else{
        // Error - but nothing really happens here, heh
        console.log("item is not in the list");
      }
    });

    this.todos = this.todos.filter(x => x.id !== todo.id);
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
    this.getAllTodos();
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

    sessionStorage.setItem(this.key, JSON.stringify(this.todos));
    });
  }
}
