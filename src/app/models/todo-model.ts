export class TodoModel {
    title: string;
    description: string;
    dateAdded: number = Date.now();
    deadline: number;
    isDone: boolean;
    priority?: priorityType;
    id: number;
}

export enum priorityType {
    Low,
    Medium,
    High,
}