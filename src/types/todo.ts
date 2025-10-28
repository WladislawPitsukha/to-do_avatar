export type Todo = {
    id: number;
    main: Todo_text;
    status: Todo_status;
    time: Todo_time;
    extra?: Todo_extra;
}

export type Todo_text = {
    title: string;
    description?: string;
}

export type Todo_status = {
    completed: boolean;
    priority: "low" | "medium" | "high";
    type: "task" | "event" | "note";
    archived?: boolean;
}

export type Todo_time = {
    createdAt: Date;
    updatedAt: Date;
    dueDate: Date;
}

export type Todo_extra = {
    tags?: string[];
    subTasks?: Todo[];
}