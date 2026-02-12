import { arrayCateReply } from "../constants/categoryReply";
import { analizeMessage } from "./analizeMessage";

type UserGender = "male" | "female" | "neutral";

function getRandomReply(replies: string[]): string {
    if (replies.length === 0) return "I'm here if you need anything.";
    const randomIndex = Math.floor(Math.random() * replies.length);
    
    return replies[randomIndex];
}

function getGenderedGreeting(gender: UserGender = "neutral"): string {
    const greetings = {
        male: [
            "Good morning, sir! How can I assist you today?",
            "Hello! How are you doing today, sir?",
            "Hey there! What can I help you with today?",
            "Good to see you! How may I be of service?"
        ],
        female: [
            "Good morning, ma'am! How can I assist you today?",
            "Hello! How are you doing today, ma'am?",
            "Hey there! What can I help you with today?",
            "Good to see you! How may I be of service?"
        ],
        neutral: [
            "Good morning! How can I assist you today?",
            "Hello! How are you doing today?",
            "Hey there! What can I help you with today?",
            "Good to see you! How may I be of service?",
            "Hi! Ready to make today productive?"
        ]
    };

    return getRandomReply(greetings[gender]);
}

export function generateReplyByBot(message: string, gender: UserGender = "neutral"): string {
    const mes = (message || "").trim();
    let bestReply: string | null = null;
    let matchedCategory: string | null = null;

    for (const item of arrayCateReply) {
        if (item.category !== "general" ) {
            const reply = analizeMessage(item, mes);

            if (reply) {
                bestReply = reply;
                matchedCategory = item.category;
                break;
            }
        }
    }

    // Apply gender-specific greeting if greeting category matched
    if (matchedCategory === "greeting") {
        return getGenderedGreeting(gender);
    }

    // Add variety to other replies when possible
    if (bestReply && matchedCategory) {
        // Add reply variations for common categories
        const replyVariations: Record<string, string[]> = {
            thanks: [
                "You're welcome! Glad to help.",
                "My pleasure! Happy to assist.",
                "Anytime! That's what I'm here for.",
                "No problem at all!"
            ],
            helpRequest: [
                "Sure — what do you need help with?",
                "I'd be happy to help! What do you need?",
                "Of course! How can I assist you?",
                "Absolutely! What would you like help with?"
            ],
            parting: [
                "Goodbye! If you need anything else, just write.",
                "Take care! I'll be here if you need me.",
                "See you later! Feel free to reach out anytime.",
                "Bye! Have a great day!"
            ],
            compliment: [
                "Thank you! I appreciate your kind words.",
                "That's very kind of you, thank you!",
                "Thanks so much! You made my day.",
                "I appreciate that! Happy to help."
            ],
            apology: [
                "No worries! Let me know how I can help.",
                "It's all good! What can I do for you?",
                "Don't worry about it! How can I assist?",
                "No problem at all! What do you need?"
            ]
        };

        if (matchedCategory in replyVariations) {
            return getRandomReply(replyVariations[matchedCategory]);
        }
    }

    if(!bestReply) {
        const generalCategory = arrayCateReply.find(a => a.category === "general");
        const generalReplies = [
            "I'm here if you need anything — tell me how I can help.",
            "Is there something specific I can help you with?",
            "Feel free to ask me anything!",
            "I'm listening! What would you like to know?"
        ];

        return generalCategory ? getRandomReply(generalReplies) : generalReplies[0];
    }

    return bestReply;
}