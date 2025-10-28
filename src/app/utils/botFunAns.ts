//TODO: SUB_TASK:  add func to declare type of user (man or woman) when greeting

//TODO: add func to page.tsx/bot to test func and use, later add more func and logic for bot

export function generateBotReply(message: string): string {
    const mes = (message || "").trim();
    const lowerMes = mes.toLowerCase();

    function messageLower(mes: string): string {
        if(mes !== null && mes !== undefined) {
            return mes.toLowerCase();
        }

        return mes;
    }

    const greetings = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"];
    const farewells = ["bye", "goodbye", "see you", "take care", "farewell"];
    const thanks = ["thanks", "thank you", "much appreciated", "grateful"];
    const helpRequests = ["help", "assist", "support", "need help", "can you help"];
    const explicitQuestions = ["?", "what", "why", "how", "when", "where", "who"];

    if (greetings.some((greet) => messageLower(lowerMes).includes(greet))) {
        const greetMatch = greetings.find((greet) => messageLower(lowerMes).includes(greet));

        if(greetMatch) {
            return `${greetMatch[1].replace(/\b\w/g, c => c.toUpperCase())}! How can I assist you today?`;
        }
    }

    return "I'm here if you need anything — tell me how I can help.";
}