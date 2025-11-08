export interface BotWidgetProps {
    subText?: string;
    message: string;
    sender: 'user' | 'bot';
    typeUser?: string;
    timestamp: Date;
}

export default function BotWidget({ subText, message, sender, timestamp }: BotWidgetProps) {
    const isBot = sender === 'bot';
    const containerClass = `flex ${isBot ? 'justify-start' : 'justify-end'}`;
    const bubbleClass = `max-w-[80%] ${
        isBot
            ? 'bg-slate-700/50 backdrop-blur-sm text-slate-100 rounded-r-2xl rounded-tl-2xl'
            : 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-l-2xl rounded-tr-2xl'
    } p-4 shadow-lg`;
    const avatarBgClass = isBot
        ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
        : 'bg-green-500';

    return(
        <div className={containerClass}>
            <div 
                className={bubbleClass}
            >
                <div className="flex items-center gap-2 mb-2">
                    {isBot ? (
                        <div 
                            className={`w-8 h-8 rounded-full ${avatarBgClass} flex items-center justify-center shadow-lg`}
                        >
                            <svg 
                                className="w-5 h-5 text-white drop-shadow" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                                />
                            </svg>
                        </div>
                    ) : (
                        <div 
                            className={`w-8 h-8 rounded-full ${avatarBgClass} flex items-center justify-center shadow-md`}
                        >
                            <svg
                                className="w-4 h-4 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z" />
                            </svg>
                        </div>
                    )}
                    <span className="text-sm text-slate-400">
                        {new Date(timestamp).toLocaleTimeString()}
                    </span>
                </div>
                <p className="text-base leading-relaxed">
                    {message}
                </p>
                {subText && (
                    <p className="mt-2 text-sm text-slate-400">
                        {subText}
                    </p>
                )}
            </div>
        </div>
    );
}