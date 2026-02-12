"use client";

import { ProfileInfo } from "@/types/type";
import React, { useEffect, useState } from "react";

type EditingFormProps = {
    profileData: ProfileInfo | null;
    editing: boolean;
    onSave?: (profile: ProfileInfo) => void;
};

export default function EditingForm({ profileData, editing, onSave }: EditingFormProps) {
    const [localProfile, setLocalProfile] = useState<ProfileInfo | null>(profileData ?? null);
    const [localEditing, setLocalEditing] = useState<boolean>(editing);

    useEffect(() => {
        setLocalProfile(profileData ?? null);
    }, [profileData]);

    useEffect(() => {
        setLocalEditing(editing);
    }, [editing]);

    const handleChangeBasic = (field: keyof ProfileInfo, value: any) => {
        setLocalProfile((prev) => (prev ? { ...prev, [field]: value } : prev));
    };

    const handleSaveAccount = () => {
        if (!localProfile) return;
            setLocalEditing(false);
        try {
            if (localProfile.id) {
                localStorage.setItem(`profile_${localProfile.id}`, JSON.stringify(localProfile));
            }
            if (onSave) onSave(localProfile);
        } catch {}
    };

    if (!localProfile) return null;

    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
                aria-label="Full name"
                placeholder="Full name"
                value={localProfile.name || ""}
                onChange={(e) => handleChangeBasic("name", e.target.value)}
                className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
            />
            <input
                aria-label="Email"
                placeholder="Email"
                value={localProfile.email || ""}
                onChange={(e) => handleChangeBasic("email", e.target.value)}
                className="px-3 py-2 border-2 border-black rounded-md w-full bg-white text-black"
            />
            <select
                aria-label="Role"
                value={(localProfile.role as string) || "user"}
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
                    className="px-4 py-2 rounded-md bg-black hover:opacity-90 text-white"
                >
                Save
                </button>
            </div>
        </div>
    );
}