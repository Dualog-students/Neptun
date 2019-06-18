import { Component } from '@angular/core';
import { TodoService } from './todo.service'
import { TodoModel, priorityType } from './models/todo-model';
import { DatePipe } from '@angular/common'
import { SortingPipesPipe } from '../pipes/sorting-pipes.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Neptun';
  todoList: TodoModel[] = [];
  sortingPipe = new SortingPipesPipe();
  sorting: string = "dateAddedNewest";

  constructor(private todoService: TodoService) {
    this.todoList = todoService.getAllTodos();
  }

  getPriority(todo: TodoModel) {
    return priorityType[todo.priority];
  }

  deleteTodo(todo: TodoModel) {
    this.todoService.deleteTodo(todo);
    this.todoList = this.todoService.getAllTodos();
  }

  addTodo(todo: TodoModel) { 
    this.todoService.addTodo(todo);
    this.todoList = this.todoService.getAllTodos();
    this.todoList = this.sortingPipe.transform(this.todoList, this.sorting);
  }

  testAddTodo() {
    this.todoService.testAddTodo();
    this.todoList = this.todoService.getAllTodos();
    this.todoList = this.sortingPipe.transform(this.todoList, this.sorting);
  }

  toggleComplete(todo: TodoModel) {
    this.todoService.toggleCompleted(todo);
    this.todoList = this.todoService.getAllTodos();
  }

  editTodo(todo: TodoModel, variable: string, edit: any) {
    this.todoService.editTodo(todo, variable, edit);
    this.todoList = this.todoService.getAllTodos();
  }
}
