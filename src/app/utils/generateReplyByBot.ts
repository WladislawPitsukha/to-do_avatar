//TODO: MAIN: add func to declare type of user (man or woman) when greeting

//TODO: NEW_MAIN: improve bot replies variety for same user inputs

import { arrayCateReply } from "../constants/categoryReply";
import { analizeMessage } from "./analizeMessage";

export function generateReplyByBot(message: string): string {
    const mes = (message || "").trim();
    let bestReply: string | null = null;

    for (const item of arrayCateReply) {
        if (item.category !== "general" ) {
            const reply = analizeMessage(item, mes);

            if (reply) {
                bestReply = reply;
                break;
            }
        }
    }

    if(!bestReply) {
        const generalCategory = arrayCateReply.find(a => a.category === "general");

        return generalCategory ? generalCategory.reply : "I'm here if you need anything — tell me how I can help.";
    }

    return bestReply;
}