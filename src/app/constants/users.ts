//TODO: later add more users or fetch from API
//TODO: add user roles and permissions
//TODO: integrate with authentication system
//TODO: add user profile settings

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