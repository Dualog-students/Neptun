import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel, priorityType } from '../models/todo-model';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todo: TodoModel;
  @Output() updateTodoList = new EventEmitter();

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
  }

  deleteTodo(todo: TodoModel) {
    this.todoService.deleteTodo(todo);
    this.updateTodoList.emit();
  }

  edit(todo: TodoModel){    
    this.router.navigate(["/edit"], {queryParams: {id: todo.id.toString()}});
  }

  toggleComplete(todo: TodoModel) {
    this.todoService.toggleComplete(todo);
    this.updateTodoList.emit();
  }

  getColorPriority(todo: TodoModel) {
    if (todo.priority == priorityType.None || todo.priority == priorityType.Low) {
      return 'green';
    } else if (todo.priority == priorityType.Medium) {
      return '#FFDC00';
    } else {
      return 'red';
    }
  }

  getCompleteColor(todo: TodoModel) {
    return todo.isDone ? 'green' : 'red';
  }

  getPriority(todo: TodoModel) {
    return priorityType[todo.priority];
  }

  getIsCompleted(todo: TodoModel) {
    return todo.isDone ? true : false;
  }
}
