//TODO: add working actions by bot - answearing & creating & showing the list of tasks todo for the day
//TODO: add logic and make func

"use client";

import BotWidget from "@/components/botWidget";
import SpeedDialMain from "@/components/SpeedDialMain";
import { MessageProps } from "@/types/message";
import React, { useState } from "react";

export default function BotTemplate() {
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
        <main className="relative pt-4 px-4">
            <div className="flex flex-col h-screen">
                <form onSubmit={handleSendMessage} className="stucky top-0 right-0 p-4 border-t bg-gray-50">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message..."
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </form>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.length > 0 ? (
                        messages.map((message) => (
                            <BotWidget
                                key={message.id}
                                message={message.text}
                                sender={message.sender}
                                timestamp={message.timestamp}
                            />
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-500">No messages yet. Start a conversation!</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="sticky bottom-0 right-0 h-auto w-auto z-50">
                <SpeedDialMain />
            </div>
        </main>
    );
}