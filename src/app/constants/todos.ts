import { Todo } from "@/types/todo";

export const todoTasks: Todo[] = [
    {
        id: 1,
        main: {
            title: "Complete the project",
            description: "Finish the project by the end of the week.",
        },
        status: {
            completed: false,
            priority: "high",
            type: "task",
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
        id: 2,
        main: {
            title: "Plan the meeting",
            description: "Schedule a meeting with the team to discuss project progress.",
        },
        status: {
            completed: false,
            priority: "medium",
            type: "event",
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
    {
        id: 3,
        main: {
            title: "Review code",
            description: "Review and provide feedback on team's code submissions.",
        },
        status: {
            completed: true,
            priority: "medium",
            type: "task",
        },
        time: {
            createdAt: new Date("2023-10-04T14:00:00Z"),
            updatedAt: new Date("2023-10-04T16:30:00Z"),
            dueDate: new Date("2023-10-06T17:00:00Z"),
        },
        extra: {
            tags: ["code", "review"],
            subTasks: [],
        }
    },
    {
        id: 4,
        main: {
            title: "Team lunch",
            description: "Monthly team lunch and social gathering.",
        },
        status: {
            completed: false,
            priority: "low",
            type: "event",
        },
        time: {
            createdAt: new Date("2023-10-05T09:00:00Z"),
            updatedAt: new Date("2023-10-05T09:00:00Z"),
            dueDate: new Date("2023-10-12T12:00:00Z"),
        },
        extra: {
            tags: ["social", "team"],
            subTasks: [],
        }
    },
    {
        id: 5,
        main: {
            title: "Write documentation",
            description: "Create technical documentation for the new features.",
        },
        status: {
            completed: false,
            priority: "high",
            type: "task",
        },
        time: {
            createdAt: new Date("2023-10-06T11:00:00Z"),
            updatedAt: new Date("2023-10-06T11:00:00Z"),
            dueDate: new Date("2023-10-09T17:00:00Z"),
        },
        extra: {
            tags: ["docs", "technical"],
            subTasks: [],
        }
    },
    {
        id: 6,
        main: {
            title: "Weekly standup",
            description: "Weekly team status update meeting.",
        },
        status: {
            completed: false,
            priority: "medium",
            type: "event",
        },
        time: {
            createdAt: new Date("2023-10-07T08:00:00Z"),
            updatedAt: new Date("2023-10-07T08:00:00Z"),
            dueDate: new Date("2023-10-11T10:00:00Z"),
        },
        extra: {
            tags: ["meeting", "weekly"],
            subTasks: [],
        }
    },
    {
        id: 7,
        main: {
            title: "Project presentation",
            description: "Prepare and deliver project status presentation to stakeholders.",
        },
        status: {
            completed: false,
            priority: "high",
            type: "event",
        },
        time: {
            createdAt: new Date("2023-10-08T13:00:00Z"),
            updatedAt: new Date("2023-10-08T13:00:00Z"),
            dueDate: new Date("2023-10-13T15:00:00Z"),
        },
        extra: {
            tags: ["presentation", "stakeholders"],
            subTasks: [],
        }
    },
]