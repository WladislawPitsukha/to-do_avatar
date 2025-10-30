import { JSX } from "@emotion/react/jsx-runtime";
import PortraitIcon from '@mui/icons-material/Portrait';
import SmartToyIcon from '@mui/icons-material/SmartToy';

interface BotWidgetProps {
    subText?: string;
    message: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export function CreateIcon(icon: any): JSX.Element {
    const Icon = icon

    return(
        <Icon 
            className="w-[15px] h-[15px] text-white "
        />
    )
}

export default function BotWidget({ subText, message, sender, timestamp }: BotWidgetProps) {
    const isBot = sender === 'bot';

    return(
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} w-auto h-auto`}>
            <div
                className={`max-w-[70%] rounded-lg p-4 ${
                isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-blue-500 text-white'
                }`}
            >
                <div className="flex flex-col items-start">
                <span className="text-sm font-medium mb-1">
                    {isBot ? <>{CreateIcon(SmartToyIcon)}: Bot</> : <>{CreateIcon(PortraitIcon)}: You</>}
                </span>
                {subText === "" || subText === undefined ? null : (
                    <span className="text-xs italic mb-2 opacity-75">{subText}</span>
                )}
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