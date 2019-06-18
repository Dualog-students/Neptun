

export class TodoModel {
    title: string;
    description: string;
    dateAdded: number = Date.now();
    deadline: number;
    isDone: boolean;
    priority?: priorityType;
}

export enum priorityType {
    low,
    medium,
    high,
}