"use client";

import React, { useEffect, useState } from "react";
import { Person } from "@mui/icons-material";

type AvatarSectProps = {
    avatarUrl?: string | null;
    name?: string | null;
    sizeClass?: string;
    imgClass?: string;
    onChangeAvatar?: (fileUrl: string | null, file?: File) => void;
};

export default function AvatarSect({
    avatarUrl,
    name,
    sizeClass = "w-20 h-20",
    imgClass = "w-full h-full object-cover",
    onChangeAvatar,
}: AvatarSectProps) {
    const [preview, setPreview] = useState<string | null>(avatarUrl ?? null);

    useEffect(() => {
        setPreview(avatarUrl ?? null);
    }, [avatarUrl]);

    const handleFile = (file?: File | null) => {
        if (!file) {
            setPreview(null);
            
            if (onChangeAvatar) onChangeAvatar(null);
            
            return;
        }
        const url = URL.createObjectURL(file);

        setPreview(url);

        if (onChangeAvatar) onChangeAvatar(url, file);
    };

    return (
        <div className={`${sizeClass} rounded-full overflow-hidden bg-gray-100 flex flex-col items-center justify-center border-2 border-black`}>
            <div className="w-full h-full">
                {preview ? (
                    <img
                        src={preview}
                        alt={name ? `${name}'s avatar` : "avatar"}
                        className={imgClass}
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "";
                            (e.currentTarget as HTMLImageElement).onerror = null;
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <Person className="w-12 h-12 text-gray-400" />
                    </div>
                )}
            </div>
            <label className="mt-2 text-xs block text-center cursor-pointer">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                    className="hidden"
                />
                <span className="text-xs text-gray-600">Change</span>
            </label>
        </div>
    );
}