//TODO: add logic, all elements and make component

interface BotWidgetProps {
    message: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const BotWidget: React.FC<BotWidgetProps> = ({ message, sender, timestamp }) => {
    const isBot = sender === 'bot';

    return(
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
            <div
                className={`max-w-[70%] rounded-lg p-4 ${
                isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-blue-500 text-white'
                }`}
            >
                <div className="flex flex-col">
                <span className="text-sm font-medium mb-1">
                    {isBot ? 'Bot' : 'You'}
                </span>
                <p className="text-base">{message}</p>
                <span className="text-xs mt-2 opacity-75">
                    {timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                    })}
                </span>
                </div>
            </div>
        </div>
    );
}

export default BotWidget;