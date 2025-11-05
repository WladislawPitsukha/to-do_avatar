import { messageLower } from "./messageLower";

export function normalizeMessage(mes: string): string {
    return messageLower(mes).replace(/[^\w\s?]/g, '');
}