import { ReplyCategoreProps } from "@/types/type";

export function getTimeReply() {
    const now = new Date();
    return `The current time is ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}.`;
}

export function getWeatherReply() {
    return "I'm not connected to live weather data yet, but I hope the weather is nice where you are!";
}

export function getTaskReply() {
    return "You can view or add tasks in your to-do list. What would you like to do?";
}

export const arrayCateReply: ReplyCategoreProps[] = [
    {
        id: 1,
        category: "greeting",
        phrases: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "greetings", "yo"],
        reply: "Good morning! How can I assist you today?"
    },
    {
        id: 2,
        category: "thanks",
        phrases: ["thanks", "thank you", "much appreciated", "grateful", "cheers", "thx"],
        reply: "You're welcome! Glad to help."
    },
    {
        id: 3,
        category: "helpRequest",
        phrases: ["help", "assist", "support", "need help", "can you help", "need support", "how to"],
        reply: "Sure — what do you need help with?"
    },
    {
        id: 4,
        category: "explicitQuestion",
        phrases: ["?", "what", "why", "how", "when", "where", "who", "which", "explain"],
        reply: "Good question — could you provide a bit more detail?"
    },
    {
        id: 5,
        category: "parting",
        phrases: ["goodbye", "see you later", "take care", "farewell", "good night", "catch you later", "bye", "see ya"],
        reply: "Goodbye! If you need anything else, just write."
    },
    {
        id: 6,
        category: "general",
        phrases: ["ok", "okay", "fine", "alright", "cool", "sure"],
        reply: "I'm here if you need anything — tell me how I can help."
    },
    {
        id: 7,
        category: "time",
        phrases: ["time", "date", "day", "month", "year", "clock", "hour", "minute"],
        reply: getTimeReply()
    },
    {
        id: 8,
        category: "weather",
        phrases: ["weather", "temperature", "forecast", "rain", "sunny", "cloudy", "wind", "snow"],
        reply: getWeatherReply()
    },
    {
        id: 9,
        category: "tasks",
        phrases: ["task", "todo", "to-do", "reminder", "note", "list", "tasks", "schedule"],
        reply: getTaskReply()
        //TODO: make func to add task to todo list and return reply with added task
        //TODO: make func to show tasks from todo list and return reply with tasks
        //TODO: make func to delete task from todo list and return reply with deleted task
        
    },
    {
        id: 10,
        category: "compliment",
        phrases: ["good job", "well done", "nice work", "awesome", "great", "amazing"],
        reply: "Thank you! I appreciate your kind words."
    },
    {
        id: 11,
        category: "apology",
        phrases: ["sorry", "my bad", "apologies", "forgive me"],
        reply: "No worries! Let me know how I can help."
    },
    {
        id: 12,
        category: "joke",
        phrases: ["joke", "make me laugh", "funny", "tell me a joke"],
        reply: () => {} //TODO: add function that will return random joke from array of jokes
    },
    {
        id: 13,
        category: "affirmation",
        phrases: ["yes", "definitely", "absolutely", "of course", "certainly"],
        reply: "Great! Let's move forward."
    },
];