"use client"

import { useEffect, useState } from "react";
import { DivBlockTodo } from "./DivBlock";

export default function TimeBlockTodo({time}: {
    time: Date;
}) {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('relize', handleResize);
        
        return () => window.removeEventListener('relize', handleResize);
    }, []);

    return(
        <DivBlockTodo>
            {windowWidth < 480 
                ? time.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric'}) 
                : time.toLocaleDateString()
            }
        </DivBlockTodo>
    )
}