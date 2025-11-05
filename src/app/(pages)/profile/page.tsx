//TODO: add profile's page, description + AI help with page's structure of UI-components & elements 
//TODO: add logic and make func
//TODO: add more information & details about user: type of user: premium, free, admin
//TODO: make another components for users
//TODO: add section with settings, preferences, activity, etc.
//examples on chat with ChatGPT: session "add to components"

"use client";

import { Person } from "@mui/icons-material";
import { ProfileInfo } from "@/types/profileInfo";
import SpeedDialMain from "@/components/SpeedDialMain";

type TemplateProps = {
    profile: ProfileInfo;
};

export default function Template({ profile }: TemplateProps) {
    return (
        <main className="relative pt-4 px-4">
            <div className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                            {profile?.avatarUrl ? (
                                <img
                                    src={profile.avatarUrl}
                                    alt={`${profile.name}'s avatar`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = '';
                                        e.currentTarget.onerror = null;
                                    }}
                                />
                            ) : (
                                <Person className="w-12 h-12 text-gray-400" />
                            )}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{profile?.name ?? 'Anonymous'}</h1>
                            <p className="text-gray-600">{profile?.email ?? 'No email provided'}</p>
                            <p className="text-sm text-gray-500">{profile?.role ?? 'No role set'}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 space-y-6">
                    <section className="border-t pt-6">
                        <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
                        {/* Add account settings form or options */}
                    </section>
                    <section className="border-t pt-6">
                        <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
                        {/* Add user preferences options */}
                    </section>
                    <section className="border-t pt-6">
                        <h2 className="text-lg font-semibold text-gray-900">Activity</h2>
                        {/* Add user activity history */}
                    </section>
                </div>
            </div>
            <div className="fixed bottom-24 right-4 z-50">
                <SpeedDialMain />
            </div>
        </main>
    );
}