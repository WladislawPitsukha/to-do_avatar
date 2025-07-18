//TODO: add information about page, metadata

"use client";

import { useState } from "react";
import BotTemplate from "./template";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export interface MessageProps {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export default function BotPage() {
    const [messages, setMessages] = useState<MessageProps[]>([]);
    const [inputMessage, setInputMessage] = useState("");

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMessage: MessageProps = {
            id: Date.now().toString(),
            text: inputMessage,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputMessage("");

        const botMessage: MessageProps = {
            id: (Date.now() + 1).toString(),
            text: "Bot response to: " + inputMessage,
            sender: "bot",
            timestamp: new Date(),
        };

        setTimeout(() => {
            setMessages((prev) => [...prev, botMessage]);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <BotTemplate
                messages={messages}
                inputMessage={inputMessage}
                setInputMessage={setInputMessage}
                onSendMessage={handleSendMessage}
            />
            <Footer />
        </div>
    );
}