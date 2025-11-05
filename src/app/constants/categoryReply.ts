import { ReplyCategoreProps } from "@/types/category";

//TODO: add more categories and phrases for better bot replies
//TODO: add subFunctions for more specific replies (time, weather, tasks, etc.)

//subFunctions for more specific replies can be added later
const timeQueries = ["time", "date", "day", "month", "year"];
const taskQueries = ["task", "todo", "to-do", "reminder", "note"];
const weatherQueries = ["weather", "temperature", "forecast", "rain", "sunny"];

export const arrayCateReply: ReplyCategoreProps[] = [
    {
        id: 1,
        category: "greeting",
        phrases: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"],
        reply: "Good morning! How can I assist you today?"
    },
    {
        id: 2,
        category: "thanks",
        phrases: ["thanks", "thank you", "much appreciated", "grateful"],
        reply: "You're welcome! Glad to help."
    },
    {
        id: 3,
        category: "helpRequest",
        phrases: ["help", "assist", "support", "need help", "can you help"],
        reply: "Sure — what do you need help with?"
    },
    {
        id: 4,
        category: "explicitQuestion",
        phrases: ["?", "what", "why", "how", "when", "where", "who"],
        reply: "Good question — could you provide a bit more detail?"
    },
    {
        id: 5,
        category: "parting",
        phrases: ["goodbye", "see you later", "take care", "farewell", "good night", "catch you later"],
        reply: "Goodbye! If you need anything else, just write."
    },
    { 
        id: 6, 
        category: "general", 
        phrases: [], 
        reply: "I'm here if you need anything — tell me how I can help." 
    }
];