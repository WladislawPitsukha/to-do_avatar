import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Form to add item for the list",
    description: "Generated using your personal Avatar",
};

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}