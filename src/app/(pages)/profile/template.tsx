import { Metadata } from "next";
import Template from "./page";

type ProfileInfo = {
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
};
const profileData: ProfileInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "User",
};
export default function ProfilePage() {
    return <Template profile={profileData} />;
}