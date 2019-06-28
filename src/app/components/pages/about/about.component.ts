import { Component, OnInit } from '@angular/core';
import {TodoService} from './../../../todo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  get_todo_count() {
    return this.todoService.get_Todos_Length();
  }
}
