import { JokesReply } from "../constants/jokes";

let previousJokes: string[] = [];
let nextJokes: string[] = [];

export function SendJokeReply(): string {
    const jokes = [...JokesReply];

    if(nextJokes.length === 0) {
        nextJokes = [...jokes]
    
        for (let i = nextJokes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            
            [nextJokes[i], nextJokes[j]] = [nextJokes[j], nextJokes[i]];
        }
    }

    const choseJoke = nextJokes.pop()!;
    previousJokes.push(choseJoke || "")
    
    return choseJoke;
}