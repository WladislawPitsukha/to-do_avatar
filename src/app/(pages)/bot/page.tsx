//TODO: add working actions by bot - answearing & creating & showing the list of tasks todo for the day
//TODO: add logic and make func

"use client";

import BotWidget from "@/components/botWidget";

import React from "react";
import { MessageProps } from "./template";
interface TemplateProps {
    messages: MessageProps[];
    inputMessage: string;
    setInputMessage: (message: string) => void;
    onSendMessage: (e: React.FormEvent) => void;
}

export default function BotTemplate({
    messages,
    inputMessage,
    setInputMessage,
    onSendMessage,
}: TemplateProps) {
    return (
        <main className="flex flex-col h-screen bg-white">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages && messages.length > 0 ? (
                    messages.map((message) => (
                        <BotWidget
                            key={message.id}
                            message={message.text}
                            sender={message.sender}
                            timestamp={message.timestamp}
                        />
                    ))
                ): (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">No messages yet. Start a conversation!</p>
                    </div>
                )}
            </div>
            <form onSubmit={onSendMessage} className="p-4 border-t">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                        placeholder="Type your message..."
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </form>
        </main>
    );
}