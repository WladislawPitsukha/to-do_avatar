//TODO: add working actions by bot - answearing & creating & showing the list of tasks todo for the day
//TODO: add logic and make func
"use client";

import BotWidget from "@/components/botWidget";
import { useState } from "react";

interface MessageProps {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export default function BotPage() {
    const [messages, setMessages] = useState<MessageProps[]>([]);
    const [inputMessage, setInputMessage] = useState("");

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!inputMessage.trim()) return;

        const userMessage: MessageProps = {
            id: Date.now().toString(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage("");

        const botMessage: MessageProps = {
            id: (Date.now() + 1).toString(),
            text: 'Bot responce to: ' + inputMessage,
            sender: 'bot',
            timestamp: new Date(),
        };

        setTimeout(() => {
            setMessages(prev => [...prev, ])
        }, 1000);
    };

    return(
        <div className="flex flex-col h-screen bg-white">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div>
                        {messages.map((message) => (
                            <BotWidget 
                                key={message.id}
                                message={message.text}
                                sender={message.sender}
                                timestamp={message.timestamp}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <form
                onSubmit={handleSendMessage}
                className="p-4 border-t"
            >
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
        </div>
    )
}