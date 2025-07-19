import { useEffect, useState } from "react";
import { DivBlockTodoProps } from "./todoItem";

export const DivBlockTodo: React.FC<DivBlockTodoProps> =  ({children}) => {
    const [windowWidth, setWindowWidth] = useState<number | null>(typeof window !== 'undefined' ? window.innerWidth : 0);
    const text = children?.toString();
    const fullText = text?.trim().split(' ');
    const firSym = fullText?.at(0)?.toUpperCase();

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('relize', handleResize);
        return () => window.removeEventListener('relize', handleResize);
    }, []);

    if (fullText && firSym) {
        fullText[0] = firSym;
    }

    const formatValue = () => {
        if (!children) return '';

        if(children instanceof Date) {
            return children.toLocaleDateString(); 
        }

        switch (typeof children) {
            case 'boolean': 
                return children ? 'Completed' : 'Pending';
            case 'string':
                if(['ad', 'medium', 'high'].includes(children)) {
                    return `priority: ${children}`;
                }

                if(['task', 'event', 'note'].includes(children)) {
                    return `type: ${children}`;
                }
            default: 
                return String(children);
        }
    }

    return(
        <div className="border border-black rounded-2xl w-auto h-auto">
            <h3 className="text-sm font-medium text-gray-700 px-2 py-1">
                {windowWidth === null ? children : 
                    windowWidth < 480
                        ? children
                        : formatValue()
                }
            </h3>
        </div>
    )
}