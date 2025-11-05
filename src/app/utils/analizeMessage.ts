import { ReplyCategoreProps } from "@/types/category";
import { messageLower } from "./messageLower";
import { normalizeMessage } from "./normalizeMessage";
import { makeReply } from "./makeReply";

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