//TODO: add func to page.tsx/bot to test func and use
//TODO: add func to declare type of user (man or woman) when greeting
//TODO: add func to generate more human-like answers: farewells, thanks, helpRequests, explicitQuestions

//TODO: later add more func and logic for bot

export function generateReplyByBot(message: string): string {
    const mes = (message || "").trim();
    const lowerMes = mes.toLowerCase();

    function messageLower(mes: string): string {
        if(mes !== null && mes !== undefined) {
            return mes.toLowerCase();
        }

        return mes;
    }

    const greetings = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"];
    const thanks = ["thanks", "thank you", "much appreciated", "grateful"];
    const helpRequests = ["help", "assist", "support", "need help", "can you help"];
    const explicitQuestions = ["?", "what", "why", "how", "when", "where", "who"];
    const parting = ["goodbye", "see you later", "take care", "farewell", "good night", "catch you later"];

    //subFunctions for more specific replies can be added later
    const timeQueries = ["time", "date", "day", "month", "year"];
    const taskQueries = ["task", "todo", "to-do", "reminder", "note"];
    const weatherQueries = ["weather", "temperature", "forecast", "rain", "sunny"];

    type ReplyCategory = "greeting" | "thanks" | "helpRequest" | "explicitQuestion" | "parting" | "timeQuery" | "taskQuery" | "weatherQuery" | "general";

    interface ReplyCategoreProps {
        id: number;
        category: ReplyCategory;
        phrases: string[];
        reply: string;
    }

    const arrayReply: ReplyCategoreProps[] = [
        {
            id: 1,
            category: "greeting",
            phrases: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"],
            reply: "Good morning! How can I assist you today?"
        },
    ]

    //TODO: add more logic here
    //TODO: finish func later
    //TODO: use analizeMessage func later in this component
    function analizeMessage({
        id,
        category,
        phrases,
        reply
    }: ReplyCategoreProps) {
        if(phrases.some((phrase) => messageLower(lowerMes).includes(phrase))) {
            const greetMatch = greetings.find((greet) => messageLower(lowerMes).includes(greet));

            if(greetMatch) {
                return `${""}Good morning! How can I assist you today?`;
            }
        }

        return "I'm here if you need anything — tell me how I can help.";
    }


    if (greetings.some((greet) => messageLower(lowerMes).includes(greet))) {
        const greetMatch = greetings.find((greet) => messageLower(lowerMes).includes(greet));

        if(greetMatch) {
            return `${""}Good morning! How can I assist you today?`;
        }
    }

    if (thanks.some((thank) => messageLower(lowerMes).includes(thank))) {
        return "You're welcome! If you need anything else, just let me know.";
    }

    return "I'm here if you need anything — tell me how I can help.";
}