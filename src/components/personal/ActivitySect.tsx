"use client";

import React from "react";
import { PRIMARY_ACCENT } from "@/app/(pages)/profile/page";
import { ProfileInfo } from "@/types/type";

type ActivitySectProps = {
    profileData: ProfileInfo | null;
};

export default function ActivitySect({ profileData }: ActivitySectProps) {
    const activity = profileData?.activity ?? [];

    return (
        <section className="p-4 rounded-md border-2 border-black bg-white">
            <h2 className={`text-lg font-semibold ${PRIMARY_ACCENT}`}>Activity</h2>

            <div className="max-h-48 overflow-auto mt-3 space-y-2">
                {activity.length > 0 ? (
                    activity.map((act: any) => (
                        <div key={act.id} className="py-2 border-b last:border-b-0">
                            <div className="text-sm font-medium text-gray-800">{act.type}</div>
                            {act.details && <div className="text-xs text-gray-600">{act.details}</div>}
                            <div className="text-xs text-gray-500">{new Date(act.timestamp).toLocaleString()}</div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-gray-600">No recent activity.</p>
                )}
            </div>
        </section>
    );
}