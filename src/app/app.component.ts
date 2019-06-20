import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { TodoService } from './todo.service'
import { TodoModel } from './models/todo-model';
import { DatePipe } from '@angular/common'
import { SortingPipesPipe } from '../pipes/sorting-pipes.pipe'
>>>>>>> Change method of keeping todo-list uupdated

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Neptun';

  constructor() { }

<<<<<<< HEAD
=======
  updateTodoList() {
    this.todoList = this.todoService.getAllTodos();
  }

  toggleComplete(todo: TodoModel) {
    this.todoService.toggleCompleted(todo);
    this.updateTodoList();
  }

  deleteTodo(todo: TodoModel) {
    this.todoService.deleteTodo(todo);
    this.updateTodoList(); 
  }

  addTodo(todo: TodoModel) { 
    this.todoService.addTodo(todo);
    this.updateTodoList();
    this.todoList = this.sortingPipe.transform(this.todoList, this.sorting);
  }

  testAddTodo() {
    this.todoService.testAddTodo();
    this.updateTodoList();
    this.todoList = this.sortingPipe.transform(this.todoList, this.sorting);
  }

  editTodo(todo: TodoModel, variable: string, edit: any) {
    this.todoService.editTodo(todo, variable, edit);
    this.updateTodoList();
  }
>>>>>>> Change method of keeping todo-list uupdated
}
