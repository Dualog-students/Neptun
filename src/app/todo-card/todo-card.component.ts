import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel, priorityType } from '../models/todo-model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todo: TodoModel;
  @Input() todoService: TodoService;
  @Output() updateTodoList = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleComplete(todo: TodoModel) {
    this.todoService.toggleCompleted(todo);
    this.updateTodoList.emit();
  }

  deleteTodo(todo: TodoModel) {
    this.todoService.deleteTodo(todo);
    this.updateTodoList.emit();
  }

  editTodo(todo: TodoModel, variable: string, edit: any) {
    this.todoService.editTodo(todo, variable, edit);
    this.updateTodoList.emit();
  }
  
  getColorPriority(todo: TodoModel) {
    if(todo.priority === 0){
      return 'green';
    }
    else if(todo.priority === 1) {
      return 'yellowgreen';
    }
    else {
      return 'red';
    }
  }

  getCompleteColor(todo: TodoModel) {
    if(todo.isDone === true) {
      return 'green';
    }
    else {
      return 'red';
    }
  }
  
  getPriority(todo: TodoModel) {
    return priorityType[todo.priority];
  }

  getCompleteMessage(todo: TodoModel) {
    if(todo.isDone === true) {
      return 'yes';
    }
    else {
      return 'no';
    }
  }
}
