//TODO: add logic, all elements and make component
//TODO: add anime button, cursor pointer ? open to buttons(edit/delete) : close button
//TODO: add Tooltip for all DivBlockToDO-components

import { Todo } from "@/types/todo";


import DashBoardBlock from "./Dashboard";
import ButtonEdDel from "./ButtonEd_Del";
import { DeleteForever, EditSquare } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

interface DivBlockToDOProps {
    children : React.ReactNode
}

export const DivBlockToDO: React.FC<DivBlockToDOProps> = ({children}) => {
    return(
        <div className="border border-black rounded-2xl w-auto h-auto">
            <h3 className="text-sm font-medium text-gray-700 px-2 py-1">
                {children}
            </h3>
        </div>
    )
}

export const actions = [
    { icon: <EditSquare />, name: 'Edit' },
    { icon: <DeleteForever />, name: 'Delete' },
];

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
        <article 
            key={id}
            className="flex items-center rounded-3xl px-4 py-5 w-full h-auto border gap-1 border-black"
        >
            <Checkbox checked={completed} />
            <div className="flex flex-col items-start justify-between w-full gap-1">
                <div className="flex items-center justify-between w-full">
                    <DivBlockToDO>
                        {priority}
                    </DivBlockToDO>
                    <DivBlockToDO>
                        {type}
                    </DivBlockToDO>
                </div>
                <div className="flex items-center justify-between w-full">
                    <DivBlockToDO>
                        {title}
                    </DivBlockToDO>
                    <div className="flex items-center justify-around gap-2 w-full">
                        <DashBoardBlock>
                            {description}
                        </DashBoardBlock>
                        <ButtonEdDel />
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <DivBlockToDO>
                        {createdAt.toLocaleDateString()}
                    </DivBlockToDO>
                    <DivBlockToDO>
                        {updatedAt.toLocaleDateString()}
                    </DivBlockToDO>
                    <DivBlockToDO>
                        {dueDate.toLocaleDateString()}
                    </DivBlockToDO>
                </div>
            </div>
        </article>
    )
}