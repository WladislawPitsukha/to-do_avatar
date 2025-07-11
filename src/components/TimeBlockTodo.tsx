import { DivBlockTodo } from "./DivBlock";

export default function TimeBlockTodo({time}: {
    time: Date;
}) {
    return(
        <DivBlockTodo>
            {window.innerWidth < 480 
                ? time.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric'}) 
                : time.toLocaleDateString()
            }
        </DivBlockTodo>
    )
}