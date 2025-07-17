//TODO: add profile's page, description + AI help with page's structure of UI-components & elements 
//TODO: add working actions by bot - answearing & creating & showing the list of tasks todo for the day
//TODO: add logic and make func
"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Person } from "@mui/icons-material";
type ProfileInfo = {
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
};
type TemplateProps = {
    profile: ProfileInfo;
};
export default function Template({ profile }: TemplateProps) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-8">
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
            </main>
            <Footer />
        </div>
    );
}