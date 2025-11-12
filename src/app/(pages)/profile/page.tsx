//TODO: MAIN_TASK: make and add independent components for sections like AccountSettings, Preferences, ActivityLog
//TODO: MAIN_TASK: make and add independent components for input fields like Locale, Timezone, etc.
//TODO: MAIN_TASK: add more updatable UI components for profile settings
//TODO: MAIN_TASK: add normal design and styling for profile page

//TODO: LATER_TASK: later add profile picture upload functionality
//TODO: LATER_TASK: add users roles and permissions management
//TODO: LATER_TASK: testing with my users
//TODO: LATER_TASK: add to users array more detailed profiles from type ProfileInfo

"use client";

import React, { useEffect, useState } from "react";
import { Person } from "@mui/icons-material";
import { ProfileInfo } from "@/types/profileInfo";
import SpeedDialMain from "@/components/SpeedDialMain";

type TemplateProps = {
    profile: ProfileInfo;
};

const PRIMARY_BG = "bg-white";
const PRIMARY_ACCENT = "text-black";
const PRIMARY_BTN = "bg-black hover:opacity-90 text-white";

export default function Template({ profile }: TemplateProps) {
    const [profileData, setProfileData] = useState<ProfileInfo | null>(null);
    const [editing, setEditing] = useState<boolean>(false);

    useEffect(() => {
        setProfileData(profile ?? null);
    }, [profile]);

    if (!profileData) {
        return (
            <main className="relative pt-4 px-4">
                <div className="container mx-auto px-4 py-8">
                    <div className={`max-w-2xl mx-auto rounded-lg shadow-md p-6 ${PRIMARY_BG} border-2 border-black`}>
                        <p className="text-gray-600">No profile data available.</p>
                    </div>
                </div>
                <div className="fixed bottom-24 right-4 z-50">
                    <SpeedDialMain />
                </div>
            </main>
        );
    }

    const handleChangeBasic = (field: keyof ProfileInfo, value: any) => {
        setProfileData((prev) => (prev ? { ...prev, [field]: value } : prev));
    };

    const handleSaveAccount = () => {
        setEditing(false);
        try {
            if (profileData?.id) {
                localStorage.setItem(`profile_${profileData.id}`, JSON.stringify(profileData));
            }
        } catch {}
    };

    const handleTogglePref = (key: string) => {
        setProfileData((prev) => {
            if (!prev) return prev;
            const prefs = { ...(prev.preferences || {}) } as any;
            prefs[key] = !prefs[key];
            return { ...prev, preferences: prefs };
        });
    };

    const handlePrefChange = (key: string, value: any) => {
        setProfileData((prev) => {
            if (!prev) return prev;
            const prefs = { ...(prev.preferences || {}) } as any;
            prefs[key] = value;
            return { ...prev, preferences: prefs };
        });
    };

    return (
        <main className="relative pt-6 px-4">
            <div className="container mx-auto px-4 py-8">
                <div className={`max-w-3xl mx-auto rounded-lg shadow-md p-6 ${PRIMARY_BG} border-2 border-black`}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border-2 border-black">
                            {profileData.avatarUrl ? (
                                <img
                                    src={profileData.avatarUrl}
                                    alt={`${profileData.name}'s avatar`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).src = "";
                                        (e.currentTarget as HTMLImageElement).onerror = null;
                                    }}
                                />
                            ) : (
                                <Person className="w-12 h-12 text-gray-400" />
                            )}
                        </div>
                        <div className="flex-1">
                            <h1 className={`text-2xl font-bold ${PRIMARY_ACCENT}`}>
                                {profileData.name ?? "Anonymous"}
                            </h1>
                            <p className="text-sm text-gray-700">
                                {profileData.email ?? "No email provided"}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                {profileData.email ?? "No email provided"}
                            </p>
                        </div>

                        <div>
                            <button
                                onClick={() => setEditing(!editing)}
                                className={`px-3 py-1 rounded-md ${PRIMARY_BTN}`}
                            >
                                {editing ? "Cancel" : "Edit"}
                            </button>
                        </div>
                    </div>
                    {editing && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input
                                aria-label="Full name"
                                placeholder="Full name"
                                value={profileData.name || ""}
                                onChange={(e) => handleChangeBasic("name", e.target.value)}
                                className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
                            />
                            <input
                                aria-label="Email"
                                placeholder="Email"
                                value={profileData.email || ""}
                                onChange={(e) => handleChangeBasic("email", e.target.value)}
                                className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
                            />
                            <select
                                aria-label="Role"
                                value={(profileData.role as string) || "user"}
                                onChange={(e) => handleChangeBasic("role", e.target.value)}
                                className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
                            >
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                <option value="guest">Guest</option>
                                <option value="premium">Premium</option>
                                <option value="free">Free</option>
                            </select>
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={handleSaveAccount} 
                                    className={`px-4 py-2 rounded-md ${PRIMARY_BTN}`}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <section className="p-4 rounded-md border-2 border-black bg-white">
                            <h2 className={`text-lg font-semibold ${PRIMARY_ACCENT}`}>
                                Account Settings
                            </h2>
                            <div className="space-y-3 mt-3">
                                <div>
                                    <label 
                                        htmlFor="locale" 
                                        className="block text-sm text-gray-600"
                                    >
                                        Locale
                                    </label>
                                    <input
                                        id="locale"
                                        name="locale"
                                        title="User locale"
                                        placeholder="e.g. en-US"
                                        value={(profileData.settings?.locale as string) || "en-US"}
                                        onChange={(e) => setProfileData(p => p ? { ...p, settings: { ...(p.settings || {}), locale: e.target.value } } : p)}
                                        className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
                                    />
                                </div>
                                <div>
                                    <label 
                                        htmlFor="timezone" 
                                        className="block text-sm text-gray-600"
                                    >
                                        Timezone
                                    </label>
                                    <input
                                        id="timezone"
                                        name="timezone"
                                        title="User timezone"
                                        placeholder="e.g. Europe/London"
                                        value={(profileData.settings?.timezone as string) || ""}
                                        onChange={(e) => setProfileData(p => p ? { ...p, settings: { ...(p.settings || {}), timezone: e.target.value } } : p)}
                                        className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <label 
                                        htmlFor="darkMode" 
                                        className="text-sm text-gray-600"
                                    >
                                        Dark mode
                                    </label>
                                    <input
                                        id="darkMode"
                                        name="darkMode"
                                        type="checkbox"
                                        title="Toggle dark mode"
                                        aria-label="Toggle dark mode"
                                        checked={!!profileData.settings?.darkMode}
                                        onChange={() => setProfileData(p => p ? { ...p, settings: { ...(p.settings || {}), darkMode: !p.settings?.darkMode } } : p)}
                                        className="h-5 w-5  text-black"
                                    />
                                </div>
                            </div>
                        </section>
                        <section className="p-4 rounded-md border-2 border-black bg-white">
                            <h2 className={`text-lg font-semibold ${PRIMARY_ACCENT}`}>
                                Preferences
                            </h2>
                            <div className="space-y-3 mt-3">
                                <div>
                                    <label 
                                        htmlFor="defaultTaskView" 
                                        className="block text-sm text-gray-600"
                                    >
                                        Default task view
                                    </label>
                                    <select
                                        id="defaultTaskView"
                                        value={(profileData.preferences?.defaultTaskView as string) || "list"}
                                        onChange={(e) => handlePrefChange("defaultTaskView", e.target.value)}
                                        className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
                                    >
                                        <option value="list">List</option>
                                        <option value="board">Board</option>
                                        <option value="calendar">Calendar</option>
                                    </select>
                                </div>
                                <div>
                                    <label 
                                        htmlFor="itemsPerPage" 
                                        className="block text-sm text-gray-600"
                                    >
                                        Items per page
                                    </label>
                                    <input
                                        id="itemsPerPage"
                                        type="number"
                                        value={(profileData.preferences?.itemsPerPage as any) || 20}
                                        onChange={(e) => handlePrefChange("itemsPerPage", Number(e.target.value))}
                                        className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
                                        min={5}
                                        max={200}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <label 
                                        htmlFor="showCompletedTasks" 
                                        className="text-sm text-gray-600"
                                    >
                                        Show completed tasks
                                    </label>
                                    <input
                                        id="showCompletedTasks"
                                        type="checkbox"
                                        checked={!!profileData.preferences?.showCompletedTasks}
                                        onChange={() => handleTogglePref("showCompletedTasks")}
                                        className="h-5 w-5 text-black"
                                    />
                                </div>
                            </div>
                        </section>
                        <section className="p-4 rounded-md border-2 border-black bg-white">
                            <h2 className={`text-lg font-semibold ${PRIMARY_ACCENT}`}>
                                Activity
                            </h2>
                            <div className="max-h-48 overflow-auto mt-3 space-y-2">
                                {profileData.activity && profileData.activity.length > 0 ? (
                                    profileData.activity.map((act: any) => (
                                        <div key={act.id} className="py-2 border-b last:border-b-0">
                                            <div className="text-sm font-medium text-gray-800">
                                                {act.type}
                                            </div>
                                            <div className="text-xs text-gray-600">
                                                {act.details}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                {new Date(act.timestamp).toLocaleString()}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-600">
                                        No recent activity.
                                    </p>
                                )}
                            </div>
                        </section>
                    </div>
                    <div className="mt-8 space-y-6 max-w-3xl mx-auto">
                        <section className="border-t pt-6">
                            <h2 className={`text-lg font-semibold ${PRIMARY_ACCENT}`}>
                                More
                            </h2>
                            <p className="text-sm text-gray-600">
                                Manage subscription, security, and integrations in future updates.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-24 right-4 z-50">
                <SpeedDialMain />
            </div>
        </main>
    );
}