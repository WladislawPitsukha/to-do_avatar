import { messageLower } from "./messageLower";
import { normalizeMessage } from "./normalizeMessage";
import { makeReply } from "./makeReply";
import { ReplyCategoreProps } from "@/types/type";

export function analizeMessage({
    category,
    phrases,
    reply
}: ReplyCategoreProps,
    originalMessage: string): string | null {
    const lowerMes = messageLower(originalMessage).trim();

    switch(category) {
        case "greeting":
        case "thanks":
        case "helpRequest":
        case "parting":
        case "timeQuery":
        case "taskQuery":
        case "weatherQuery":
        case "general":
        case "compliment":
        case "joke":
        case "motivation":
        case "apology":
        case "affirmation":
        case "time":
        case "weather":
        case "tasks":
            return makeReply(phrases, reply, lowerMes);

        case "explicitQuestion": {
            if (originalMessage.trim().endsWith("?") 
                || phrases.some((p) => normalizeMessage(lowerMes).includes(p))) {
                
                return reply;
            };

            return null;
        }

        default: 
            return null;
    }
}