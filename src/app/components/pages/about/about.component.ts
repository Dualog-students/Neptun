import { Component, OnInit } from '@angular/core';
import {TodoService} from './../../../todo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  todoLength = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoLength = this.todoService.getAllTodos().length;
  }
}
