export type Todo = {
    main: Todo_main;
    status: Todo_status;
    time: Todo_time;
    extra?: Todo_extra;
}

type Todo_main = {
    id: number;
    title: string;
    description?: string;
}

type Todo_status = {
    completed: boolean;
    priority: "low" | "medium" | "high";
    type: "task" | "event" | "note";
    archived?: boolean;
}

type Todo_time = {
    createdAt: Date;
    updatedAt: Date;
    dueDate: Date;
}

type Todo_extra = {
    tags?: string[];
    subTasks?: Todo[];
}