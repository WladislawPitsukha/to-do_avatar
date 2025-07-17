//TODO: Add API calls here
//TODO: Add error handling
//TODO: add get messages function
//TODO: working bot response (all functions and commands)

export async function sendMessage(message: string) {
    try {
        const responce = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({message}),
        });
        return await responce.json();
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}