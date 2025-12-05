import { ProfileInfo } from "@/types/profileInfo";

// TODO: these are local example users for development / demo purposes.
// TODO: later: fetch from API or integrate with auth backend.

export const USERS: ProfileInfo[] = [
    {
        id: "u1",
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        avatarUrl: "https://i.pravatar.cc/150?img=32",
        role: "admin",
        membership: {
            plan: "premium",
            status: "active",
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365).toISOString(),
        },
        settings: {
            darkMode: false,
            locale: "en-US",
            timezone: "Europe/London",
            notifications: { 
                mentions: true, 
                messages: true, 
                tasks: true 
            },
            privacyLevel: "private",
            dataSharing: false,
        },
        preferences: {
            defaultTaskView: "board",
            itemsPerPage: 20,
            showCompletedTasks: true,
            language: "en",
        },
        activity: [
            {
                id: "a1",
                type: "login",
                details: "Signed in from Chrome on Windows",
                timestamp: new Date().toISOString(),
            },
            {
                id: "a2",
                type: "create_task",
                details: 'Created task "Prepare Q4 report"',
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
            },
        ],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365).toISOString(),
        lastLogin: new Date().toISOString(),
    },
    {
        id: "u2",
        name: "Bob Martinez",
        email: "bob.martinez@example.com",
        avatarUrl: "https://i.pravatar.cc/150?img=12",
        role: "user",
        membership: {
            plan: "free",
            status: "active",
        },
        settings: {
            darkMode: true,
            locale: "en-US",
            timezone: "America/New_York",
            notifications: { mentions: true, messages: false, tasks: true },
            privacyLevel: "public",
            dataSharing: false,
        },
        preferences: {
            defaultTaskView: "list",
            itemsPerPage: 10,
            showCompletedTasks: false,
            language: "en",
        },
        activity: [
            {
                id: "a3",
                type: "login",
                details: "Signed in from Mobile",
                timestamp: new Date().toISOString(),
            },
        ],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 200).toISOString(),
        lastLogin: new Date().toISOString(),
    },
    {
        id: "u3",
        name: "Carol Nguyen",
        email: "carol.nguyen@example.com",
        avatarUrl: "https://i.pravatar.cc/150?img=48",
        role: "user",
        membership: {
            plan: "free",
            status: "trial",
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14).toISOString(),
        },
        settings: {
            darkMode: false,
            locale: "fr-FR",
            timezone: "Europe/Paris",
            notifications: { 
                mentions: false, 
                messages: true, 
                tasks: true 
            },
            privacyLevel: "friends-only",
            dataSharing: true,
        },
        preferences: {
            defaultTaskView: "calendar",
            itemsPerPage: 15,
            showCompletedTasks: true,
            language: "fr",
        },
        activity: [],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90).toISOString(),
        lastLogin: new Date().toISOString(),
    },
];

export default USERS;