export type ReplyCategory = 
    | "greeting" 
    | "thanks" 
    | "helpRequest" 
    | "explicitQuestion" 
    | "parting" 
    | "timeQuery" 
    | "taskQuery" 
    | "weatherQuery" 
    | "general";

export type ReplyCategoreProps = {
    id?: number;
    category: ReplyCategory;
    phrases: string[];
    reply: string;
}