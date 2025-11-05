"use client"

import React from "react";
import { Home, Person } from "@mui/icons-material";
import ThreePIcon from '@mui/icons-material/ThreeP';
import Link from "next/link";
import { usePathname } from "next/navigation"
import { NavbarProps } from "@/types/navbar";
import { CreateIcon, CreateIconProps } from "./CreateIcon";

export default function Navbar() {
    const pathname = usePathname();

    const iconProps: CreateIconProps = {
        width: '15px',
        height: '15px',
        color: 'black'
    }

    const navItems: NavbarProps[] = [
        { title: "Home", href: "/", label: "Home", icon: <Home /> },
        { title: "Profile", href: "/profile", label: "Profile", icon: <Person /> },
        { title: "Chat", href: "/chat", label: "chat", icon: <ThreePIcon /> },
    ];
    //TODO: add BurgerButton, when a phone's type
    
    return(
        <nav className="sticky top-0 right-0 border-b bg-white border-gray-200 w-full h-[60px] z-50">
            <div className="flex items-center justify-around h-full max-w-7xl mx-auto">
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
                                <CreateIcon icon={item.icon} set={iconProps} />
                                <span className="hidden text-black sm:inline">{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}