//TODO: MAIN_TASK: later add more users or fetch from API
//TODO: MAIN_TASK: add user roles and permissions
//TODO: MAIN_TASK: integrate with authentication system
//TODO: MAIN_TASK: add user profile settings

//TODO: LATER_TASK: later add profile picture upload functionality
//TODO: LATER_TASK: add users roles and permissions management
//TODO: LATER_TASK: testing with my users
//TODO: LATER_TASK: add to users array more detailed profiles from type ProfileInfo

export type User = {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    role?: 'admin' | 'user' | 'guest';
};

export const USERS: User[] = [
    {
        id: 'u1',
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=32',
        role: 'admin',
    },
    {
        id: 'u2',
        name: 'Bob Martinez',
        email: 'bob.martinez@example.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=12',
        role: 'user',
    },
    {
        id: 'u3',
        name: 'Carol Nguyen',
        email: 'carol.nguyen@example.com',
        avatarUrl: 'https://i.pravatar.cc/150?img=48',
        role: 'user',
    },
];

export default USERS;