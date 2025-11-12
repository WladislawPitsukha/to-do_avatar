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
    preferences?: PreferencesProps;
    settings?: SettingProps;
    activity?: ActivityEntry[];
    createdAt?: string;
    lastLogin?: string;
};

type PreferencesProps = {
    defaultTaskView?: 'list' | 'board' | 'calendar';
    itemsPerPage?: number;
    showCompletedTasks?: boolean;
    language?: string;
    //TODO: SUB_TASK: extend as needed
}

type SettingProps = {
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
    //TODO: SUB_TASK: extend as needed
}

export type ActivityEntry = {
    id: string;
    type: 'login' | 'create_task' | 'update_task' | 'delete_task' | 'message' | string;
    details?: string;
    timestamp: string;
};