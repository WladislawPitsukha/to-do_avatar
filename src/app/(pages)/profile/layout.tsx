import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Template from "./page";
import { ProfileInfo } from "@/types/type";

const profileData: ProfileInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "user",
};

export const metadata: Metadata = {
    title: "Profile's page",
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
                <Template profile={profileData} />
            <Footer />
        </div>
    );
}

export { profileData };