import { Pipe, PipeTransform } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { TodoModel } from 'src/app/models/todo-model';

@Pipe({
  name: 'sortingPipes'
})
export class SortingPipesPipe implements PipeTransform {

  transform(value: TodoModel[], args: string): TodoModel[] {
    if(args === "dateAddedNewest")
    {
      return value.sort((a, b) => b.dateAdded - a.dateAdded);
    }

    else if(args === "dateAddedOldest")
    {
      return value.sort((a, b) => a.dateAdded - b.dateAdded);
    }

    else if(args === "deadlineNewest")
    {
      return value.sort((a, b) => b.deadline - a.deadline);
    }

    else if(args === "deadlineOldest")
    {
      return value.sort((a, b) => b.deadline - a.deadline);
    }

    else if(args === "priorityLow")
    {
      return value.sort((a, b) => a.priority - b.priority);
    }

    else if(args === "priorityHigh")
    {
      return value.sort((a, b) => b.priority - a.priority);
    }

    else
    {
      return value;
    }
  }
}