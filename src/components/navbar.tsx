//TODO: add logic, all elements and make component
//TODO: eleemnt and add to the main page
"use client"


import React from "react";
import { Home, Person, SmartToy } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"

export type NavbarProps = {
    title: string;
    href: string;
    label: string;
    icon: React.ReactElement;
}

export function CreateIcon({icon}: {icon: any}) {
    const IconName = icon

    return React.cloneElement(IconName, {
        className: "text-black"
    })
}

export default function Navbar() {
    const pathname = usePathname();

    const navItems: NavbarProps[] = [
        { title: "Home", href: "/", label: "Home", icon: <Home /> },
        { title: "Profile", href: "/profile", label: "Profile", icon: <Person /> },
        { title: "Bot", href: "/bot", label: "Bot", icon: <SmartToy /> },
    ];
    
    return(
        <nav className="border bg-white border-black w-full h-[60px]">
            <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-black">
                        ToDo App
                    </h1>
                </div>
                <ul className="flex items-center gap-4">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                                    ${pathname === item.href ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                            >
                                <CreateIcon icon={item.icon} />
                                <span className="hidden text-black sm:inline">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}