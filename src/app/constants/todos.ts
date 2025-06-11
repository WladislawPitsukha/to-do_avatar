import { Todo } from "@/types/todo";

export const todoTasks: Todo[] = [
    {
        main: {
            id: 1,
            title: "Complete the project",
            description: "Finish the project by the end of the week.",
        },
        status: {
            completed: false,
            priority: "high",
            type: "task",
            archived: false,
        },
        time: {
            createdAt: new Date("2023-10-01T10:00:00Z"),
            updatedAt: new Date("2023-10-02T12:00:00Z"),
            dueDate: new Date("2023-10-07T17:00:00Z"),
        },
        extra: {
            tags: ["work", "urgent"],
            subTasks: [],
        }
    },
    {
        main: {
            id: 2,
            title: "Plan the meeting",
            description: "Schedule a meeting with the team to discuss project progress.",
        },
        status: {
            completed: false,
            priority: "medium",
            type: "event",
            archived: false,
        },
        time: {
            createdAt: new Date("2023-10-03T09:00:00Z"),
            updatedAt: new Date("2023-10-04T11:00:00Z"),
            dueDate: new Date("2023-10-05T15:00:00Z"),
        },
        extra: {
            tags: ["meeting", "team"],
            subTasks: [],
        }
    },
]