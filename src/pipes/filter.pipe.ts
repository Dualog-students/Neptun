import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel, todoStatus } from 'src/app/models/todo-model';

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
        return value.filter((a) => a.isDone === todoStatus.completed);
      }
      case 'notCompleted': {
        return value.filter((a) => a.isDone === todoStatus.notCompleted);
      }
      case 'inProgress': {
        return value.filter((a) => a.isDone === todoStatus.inProgress);
      }
      default: {
        return value;
      }
    }
  }
}
