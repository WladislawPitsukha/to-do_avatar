//TODO: add logic, all elements and make component

import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

export type FooterLinkProps = {
    title: string;
    name: string;
    href: string;
    icon: any;
}

export default function Footer() {
    const socialLinks: FooterLinkProps[] = [
        {
            title: "Profile GitHub",
            name: "GitHub",
            href: "https://github.com/yourusername",
            icon: <GitHub />
        },
        {
            title: "Profile LinkedIn",
            name: "LinkedIn",
            href: "https://linkedin.com/in/yourusername",
            icon: <LinkedIn />
        }
    ];

    return(
        <footer className="border bg-white border-black w-full h-[90px] mt-auto">
            <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-4">
                <div className="flex items-center gap-2">
                    <p className="text-sm text-black">
                        © {new Date().getFullYear()} ToDo App. All rights reserved.
                    </p>
                </div>
                <ul className="flex items-center gap-4">
                    {socialLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="flex items-center gap-2 text-black hover:text-gray-900 transition-colors"
                                target="_blank"
                            >
                                {link.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}