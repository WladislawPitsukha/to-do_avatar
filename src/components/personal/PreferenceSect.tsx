"use client";

import { PRIMARY_ACCENT } from "@/app/(pages)/profile/page";
import { ProfileInfo } from "@/types/type";
import { useEffect, useState } from "react";

export type ProfileSectProps = {
    profileData: ProfileInfo | null;
};

export default function PreferenceSect({ profileData }: ProfileSectProps) {
    const [localProfile, setLocalProfile] = useState<ProfileInfo | null>(profileData ?? null);

    useEffect(() => {
        setLocalProfile(profileData ?? null);
    }, [profileData]);

    const handlePrefChange = (key: string, value: any) => {
        setLocalProfile((prev) => {
            if (!prev) return prev;
            const prefs = { ...(prev.preferences || {}) } as any;
            prefs[key] = value;
            return { ...prev, preferences: prefs };
        });
    };

    const handleTogglePref = (key: string) => {
        setLocalProfile((prev) => {
            if (!prev) return prev;
            const prefs = { ...(prev.preferences || {}) } as any;
            prefs[key] = !prefs[key];
            return { ...prev, preferences: prefs };
        });
    };

    return (
        <section className="p-4 rounded-md border-2 border-black bg-white">
            <h2 className={`text-lg font-semibold ${PRIMARY_ACCENT}`}>Preferences</h2>
            <div className="space-y-3 mt-3">
                <div>
                    <label htmlFor="defaultTaskView" className="block text-sm text-gray-600">
                        Default task view
                    </label>
                    <select
                        id="defaultTaskView"
                        value={(localProfile?.preferences?.defaultTaskView as string) ?? "list"}
                        onChange={(e) => handlePrefChange("defaultTaskView", e.target.value)}
                        className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
                    >
                        <option value="list">List</option>
                        <option value="board">Board</option>
                        <option value="calendar">Calendar</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="itemsPerPage" className="block text-sm text-gray-600">
                        Items per page
                    </label>
                    <input
                        id="itemsPerPage"
                        type="number"
                        value={(localProfile?.preferences?.itemsPerPage as number) ?? 20}
                        onChange={(e) => handlePrefChange("itemsPerPage", Number(e.target.value))}
                        className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
                        min={5}
                        max={200}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <label htmlFor="showCompletedTasks" className="text-sm text-gray-600">
                        Show completed tasks
                    </label>
                    <input
                        id="showCompletedTasks"
                        type="checkbox"
                        checked={!!localProfile?.preferences?.showCompletedTasks}
                        onChange={() => handleTogglePref("showCompletedTasks")}
                        className="h-5 w-5 text-black"
                    />
                </div>
            </div>
        </section>
    );
}