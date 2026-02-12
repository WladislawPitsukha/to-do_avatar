
//TODO: MAIN_TASK: add more updatable UI components for profile settings
//TODO: MAIN_TASK: add normal design and styling for profile page

//TODO: LATER_TASK: later add profile picture upload functionality
//TODO: LATER_TASK: add users roles and permissions management
//TODO: LATER_TASK: testing with my users
//TODO: LATER_TASK: add to users array more detailed profiles from type ProfileInfo

"use client";

import React, { useEffect, useState } from "react";


import SpeedDialMain from "@/components/SpeedDialMain";
import MoreSect from "@/components/personal/MoreSect";
import PreferenceSect from "@/components/personal/PreferenceSect";
import ActivitySect from "@/components/personal/ActivitySect";
import AccSetSect from "@/components/personal/AccSetSect";
import AvatarSect from "@/components/personal/AvatarSect";
import EditingForm from "@/components/personal/EditingForm";
import { ProfileInfo } from "@/types/type";

type TemplateProps = {
    profile: ProfileInfo;
};

export const PRIMARY_BG = "bg-white";
export const PRIMARY_ACCENT = "text-black";
export const PRIMARY_BTN = "bg-black hover:opacity-90 text-white";

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

    return (
        <main className="relative pt-6 px-4">
            <div className="container mx-auto px-4 py-8">
                <div className={`max-w-3xl mx-auto rounded-lg shadow-md p-6 ${PRIMARY_BG} border-2 border-black`}>
                    <div className="flex items-center gap-4 mb-6">
                        <AvatarSect 
                            avatarUrl={profileData.avatarUrl} 
                            name={profileData.name} 
                            sizeClass="w-24 h-24" 
                            imgClass="w-full h-full object-cover"
                        />
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
                    {editing && (<EditingForm profileData={profileData} editing={editing} />)}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <AccSetSect profileData={profileData} />
                        <PreferenceSect profileData={profileData} />
                        <ActivitySect profileData={profileData} />
                    </div>
                    <MoreSect />
                </div>
            </div>
            <div className="fixed bottom-24 right-4 z-50">
                <SpeedDialMain />
            </div>
        </main>
    );
}