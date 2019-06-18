import { Component } from '@angular/core';
import { TodoService } from './todo.service'
import { TodoModel, priorityType } from './models/todo-model';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Neptun';
  todoService: TodoService = new TodoService();


  getPriority(todo: TodoModel) {
    return priorityType[todo.priority];
  }
}
