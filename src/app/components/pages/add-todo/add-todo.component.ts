import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  prior = ['Low', 'Medium', 'High'];
  submittet = false;
  constructor() {}
  ngOnInit() {}

  onSubmit() {
    this.submittet = true;
  }

  }

