export interface MessageProps {
    id: string;
    subText?: string
    mesText: string;
    sender: "user" | "bot";
    timestamp: Date;
}