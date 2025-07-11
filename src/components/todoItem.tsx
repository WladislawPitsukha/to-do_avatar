import { Todo } from "@/types/todo";

import DashBoardBlock from "./Dashboard";
import ButtonEdDel from "./ButtonEdDel";
import { DeleteForever, EditSquare } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { DivBlockTodo } from "./DivBlock";
import TimeBlockTodo from "./TimeBlockTodo";

export interface DivBlockTodoProps {
    children : React.ReactNode
}

export const actions = [
    { icon: <EditSquare />, name: 'Edit' },
    { icon: <DeleteForever />, name: 'Delete' },
];
//TODO: to add new component and finish this func for time's block

export default function TodoItem({
    id,
    main,
    status,
    time,
}: Todo) {
    const {
        title, description,
    } = main;
    const {
        completed, priority, type,
    } = status;
    const {
        createdAt, updatedAt, dueDate
    } = time;

    return(
        //TODO: add description to all components, like "type: event, deadline: 2023-10-01, etc"
        //TODO: add changes by AI for width and height of the component
        <article 
            key={id}
            className="flex items-center rounded-3xl px-4 py-5 w-full h-auto border gap-1 border-black"
        >
            <Checkbox checked={completed} />
            <div className="flex flex-col items-start justify-between w-full gap-1">
                <div className="flex items-center justify-between w-full">
                    <DivBlockTodo>
                        {priority}
                    </DivBlockTodo>
                    <DivBlockTodo>
                        {type}
                    </DivBlockTodo>
                </div>
                <div className="flex items-center justify-between w-full">
                    <DivBlockTodo>
                        {title}
                    </DivBlockTodo>
                    <div className="flex items-center justify-around gap-2 w-full">
                        <DashBoardBlock>
                            {description}
                        </DashBoardBlock>
                        <ButtonEdDel />
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <TimeBlockTodo 
                        time={createdAt} 
                    />
                    <TimeBlockTodo 
                        time={updatedAt} 
                    />
                    <TimeBlockTodo 
                        time={dueDate} 
                    />
                </div>
            </div>
        </article>
    )
}