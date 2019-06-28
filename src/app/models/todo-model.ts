export class TodoModel {
    title: string;
    description?: string;
    dateAdded: number = Date.now();
    deadline?: number;
    isDone: todoStatus;
    priority?: priorityType;
    id: number;
}

export enum priorityType {
    None,
    Low,
    Medium,
    High,
}

export enum todoStatus {
    completed,
    inProgress,
    notCompleted,
}
