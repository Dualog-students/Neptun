import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './../../../todo.service';
import { TodoModel, priorityType } from 'src/app/models/todo-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  prior = [
    { name: 'None',
      value: 0 },
    { name:'Low',
      value: 1 },
    { name:'Medium',
      value: 2 },
    { name: 'High',
      value: 3 },
  ];
  editTodo: TodoModel;
  editId : number;
  newTodo = new TodoModel();
  submittet = false;

  constructor( private route: ActivatedRoute, private todoService: TodoService, private router: Router ) { 
    if (this.editTodo === null){
      console.log("Woops, error!")
    }
  }

  ngOnInit() {
    this.editId = <number><unknown> this.route.snapshot.queryParamMap.get('id');
    this.editTodo = this.todoService.getTodo(this.editId);
  }
  onSubmit() {
    this.submittet = true;
    this.todoService.updateTodo(this.editTodo);
    this.router.navigateByUrl('');
  }

}
