import React from "react"

export interface CreateIconProps {
    width: string;
    height: string;
    color: string
}

export function CreateIcon({icon, set}: {icon: any, set: CreateIconProps}) {
    const IconName = icon
    const {width, height, color} = set

    return React.cloneElement(IconName, {
        className: `${width === 'number' ? `w-${width}` : `w-[${width}]`} h-[${set.height}] text-${set.color}`
    })
}