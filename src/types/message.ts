export interface MessageProps {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}