"use client";

import { generateReplyByBot } from "@/app/utils/generateReplyByBot";
import BotWidget from "@/components/BotWidget";
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
            mesText: inputMessage,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputMessage("");

        const replyTextByBot = generateReplyByBot(inputMessage);

        const botMessage: MessageProps = {
            id: (Date.now() + 1).toString(),
            subText: `Replying to: ${userMessage.sender}`,
            mesText: replyTextByBot,
            sender: "bot",
            timestamp: new Date(),
        };

        setTimeout(() => {
            setMessages((prev) => [...prev, botMessage]);
        }, 2000);
    };

    return (
        <main className="relative h-auto w-auto">
            <div className="flex flex-col h-auto min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 ">
                <form 
                    onSubmit={handleSendMessage} 
                    className="fixed bottom-24 right-0 p-4 bg-slate-800/80 backdrop-blur-md border-t border-slate-700 w-full"
                >
                    <div className="flex gap-3 max-w-4xl mx-auto">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            className="flex-1 px-6 py-3 bg-slate-700/50 text-slate-100 
                                        placeholder-slate-400 rounded-full border-2 border-slate-600
                                        focus:outline-none focus:border-purple-500 focus:ring-2 
                                        focus:ring-purple-500/20 transition-all duration-200"
                            placeholder="Type your message..."
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-full bg-gradient-to-r 
                                        from-purple-500 to-indigo-600 text-white font-medium
                                        hover:from-purple-600 hover:to-indigo-700
                                        focus:outline-none focus:ring-2 focus:ring-purple-500/50
                                        transform hover:scale-105 transition-all duration-200
                                        shadow-lg shadow-purple-500/20"
                        >
                            Send
                        </button>
                    </div>
                </form>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                    {messages.length > 0 ? (
                        messages.map((message) => (
                            <BotWidget
                                key={message.id}
                                subText={message.subText}
                                message={message.mesText}
                                sender={message.sender}
                                timestamp={message.timestamp}
                            />
                        ))
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-400">No messages yet. Start a conversation!</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="fixed bottom-24 right-4 z-50">
                <SpeedDialMain />
            </div>
        </main>
    );
}