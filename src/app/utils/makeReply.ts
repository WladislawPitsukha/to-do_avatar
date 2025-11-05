import { normalizeMessage } from "./normalizeMessage";

export function makeReply(phrases: string[], reply: string, lowerMes: string): string | null {
    const normalizedMes = normalizeMessage(lowerMes);
    
    for(const phrase of phrases.sort((a, b) => b.length - a.length)) {
        const mes = phrase === "?" ? "?" : phrase.replace(/[^\w\s]/g, '');

        if(mes === "?" ? lowerMes.includes("?") : new RegExp(`\\b${mes}\\b`, "i").test(normalizedMes)) {
            return reply
        }
    }

    return null;
}
