import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/todo-model';
import { TodoService } from '../../../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  prior = [
    {
      name: 'None',
      value: 0
    },
    {
      name: 'Low',
      value: 1
    },
    {
      name: 'Medium',
      value: 2
    },
    {
      name: 'High',
      value: 3
    },
  ];

  newTodo = new TodoModel();
  submittet = false;

  constructor(private todoService: TodoService, private router: Router) { }
  ngOnInit() { }

  onSubmit() {
    this.submittet = true;
    this.todoService.addTodo(this.newTodo);
    this.router.navigateByUrl('');
  }
}

