"use client";

import { PRIMARY_ACCENT } from "@/app/(pages)/profile/page";
import { ProfileInfo } from "@/types/type";
import { useEffect, useState } from "react";

export type ProfileSectProps = {
    profileData: ProfileInfo | null;
};

export default function AccSetSect({ profileData }: ProfileSectProps) {
    const [localProfile, setLocalProfile] = useState<ProfileInfo | null>(profileData ?? null);

    useEffect(() => {
        setLocalProfile(profileData ?? null);
    }, [profileData]);

    return(
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
                        value={(localProfile?.settings?.locale as string) || "en-US"}
                        onChange={(e) => setLocalProfile(p => p ? { ...p, settings: { ...(p.settings || {}), locale: e.target.value } } : p)}
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
                        value={(localProfile?.settings?.timezone as string) || ""}
                        onChange={(e) => setLocalProfile(p => p ? { ...p, settings: { ...(p.settings || {}), timezone: e.target.value } } : p)}
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
                        checked={!!localProfile?.settings?.darkMode}
                        onChange={() => setLocalProfile(p => p ? { ...p, settings: { ...(p.settings || {}), darkMode: !p.settings?.darkMode } } : p)}
                        className="h-5 w-5  text-black"
                    />
                </div>
            </div>
        </section>
    )
}