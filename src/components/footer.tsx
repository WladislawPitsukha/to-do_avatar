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
            href: "https://github.com/WladislawPitsukha",
            icon: <GitHub />
        },
        {
            title: "Profile LinkedIn",
            name: "LinkedIn",
            href: "https://linkedin.com/in/wladislaw-pitsukha-17050723a/",
            icon: <LinkedIn />
        }
    ];

    return(
        <footer className="sticky bottom-0 right-0 border bg-white border-black w-full h-[90px] mt-4">
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