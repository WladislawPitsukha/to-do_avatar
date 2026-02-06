export type ReplyCategory = 
    | "greeting" 
    | "thanks" 
    | "helpRequest" 
    | "explicitQuestion" 
    | "parting" 
    | "timeQuery" 
    | "taskQuery" 
    | "weatherQuery" 
    | "general"
    | "compliment"
    | "joke"
    | "motivation"
    | "apology"
    | "affirmation"
    | "time"
    | "weather"
    | "tasks";

export type ReplyCategoreProps = {
    id?: number;
    category: ReplyCategory;
    phrases: string[];
    reply: string;
}

export interface MessageProps {
    id: string;
    subText?: string
    mesText: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export type NavbarProps = {
    title: string;
    href: string;
    label: string;
    icon: React.ReactElement;
}

export type Todo = {
    id: number;
    main: {
        title: string;
        description?: string;
    };
    status: {
        completed: boolean;
        priority: "low" | "medium" | "high";
        type: "task" | "event" | "note";
        archived?: boolean;
    };
    time: {
        createdAt: Date;
        updatedAt: Date;
        dueDate: Date;
    };
    extra?: {
        tags?: string[];
        subTasks?: Todo[];
    };
}

export type ProfileInfo = {
    id?: string;
    name: string;
    email: string;
    role?: 'admin' | 'user' | 'guest' | 'premium' | 'free';
    avatarUrl?: string;
    membership?: {
        plan?: 'free' | 'premium' | 'pro';
        status?: 'active' | 'inactive' | 'trial';
        expiresAt?: string;
    };
    preferences?: {
        defaultTaskView?: 'list' | 'board' | 'calendar';
        itemsPerPage?: number;
        showCompletedTasks?: boolean;
        language?: string;
    };
    settings?: {
        darkMode?: boolean;
        notifications?: {
            mentions?: boolean;
            messages?: boolean;
            tasks?: boolean;
        };
        locale?: string;
        timezone?: string;
        privacyLevel?: 'public' | 'private' | 'friends-only';
        dataSharing?: boolean;
    };
    activity?: {
        id: string;
        type: 'login' | 'create_task' | 'update_task' | 'delete_task' | 'message' | string;
        details?: string;
        timestamp: string;
    }[];
    createdAt?: string;
    lastLogin?: string;
};