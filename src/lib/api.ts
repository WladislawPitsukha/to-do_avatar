import { MessageProps } from "@/types/message";

export async function sendMessage(message: string) {
    try {
        const responce = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });

        if(!responce.ok) {
            throw new Error(`HTTP error! status: ${responce.status}`);
        }

        return await responce.json();
    } catch (error) {
        console.error('Error sending message:', error);
        throw new Error('Failed to send message. Please try again later.');
    }
}

export async function getMessage(): Promise<MessageProps[]> {
    try {
        const responce = await fetch('/api/chat');

        if(!responce.ok) {
            throw new Error(`HTTP error! status: ${responce.status}`);
        }

        return await responce.json();
    } catch (error) {
        console.error('Error getting messages:', error);
        throw new Error('Failed to get messages. Please try again later.');
    }
}