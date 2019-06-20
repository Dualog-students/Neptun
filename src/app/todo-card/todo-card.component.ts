import { Component, OnInit, Input } from '@angular/core';
import { TodoModel, priorityType } from '../models/todo-model';
import { HomeComponent } from '../components/pages/home/home.component';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input() todo: TodoModel;
  @Input() homeComponent: HomeComponent;

  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD

=======
  
>>>>>>> Change method of keeping todo-list uupdated
  getColorPriority(todo: TodoModel) {
    if(todo.priority == 0){
      return 'green';
    }
    else if(todo.priority == 1) {
      return 'yellowgreen';
    }
    else {
      return 'red';
    }
  }

  getCompleteColor(todo: TodoModel) {
    if(todo.isDone == true) {
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
    if(todo.isDone == true) {
      return 'yes';
    }
    else {
      return 'no';
    }
  }
}
