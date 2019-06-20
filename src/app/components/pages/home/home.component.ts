import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../../todo.service';
import { TodoModel, priorityType} from './../../../models/todo-model';
import { DatePipe } from '@angular/common'
import { SortingPipesPipe } from './../../../../pipes/sorting-pipes.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todoList: TodoModel[] = [];
  sortingPipe = new SortingPipesPipe();
  sorting: string = "dateAddedNewest";

  constructor(private todoService: TodoService) {
    this.todoList = todoService.getAllTodos();
  }

  updateTodoList() {
    this.todoList = this.todoService.getAllTodos();
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

  toggleComplete(todo: TodoModel) {
    this.todoService.toggleCompleted(todo);
    this.todoList = this.todoService.getAllTodos();
  }

  ngOnInit() {
  }

}