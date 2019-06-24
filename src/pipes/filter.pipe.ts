import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from 'src/app/models/todo-model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: TodoModel[], args: string): TodoModel[] {
    switch (args) {
      case 'all': {
        return value;
      }
      case 'completed': {
        return value.filter((a) => a.isDone === true);
      }
      case 'notCompleted': {
        return value.filter((a) => a.isDone === false);
      }
      default: {
        return value;
      }
    }
  }
}
