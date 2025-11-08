import { Todo } from "@/types/todo";
import DashBoardBlock from "./Dashboard";
import ButtonEdDel from "./ButtonEdDel";
import { DeleteForever, EditSquare } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { DivBlockTodo } from "./DivBlock";
import TimeBlockTodo from "./TimeBlockTodo";
import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { DELETE_TODO, UPDATE_TODO, UPDATE_TODO_STATUS } from "@/graphql/mutations";

//TODO: add mutations/func to change title of task
//TODO: add mutations/func to change description of task
//TODO: add mutations/func to change the whole form of task
//TODO: delete block of settings
//TODO: add showing description when cursor-pointer on block description
//TODO: add icon editon on blocks:  title, description 
//TODO: add eding by icon-button description, title when click on block edit
//TODO: add eding by select for priority and type
//TODO: add changing all type of date 


export interface DivBlockTodoProps {
    children : React.ReactNode
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
}: Todo & {
    onStatusUpdate: (id: number, completed: boolean) => Promise<void>;
    loading?: boolean
    onDelete?: (id: number) => void;
}) {
    const {
        title, description,
    } = main;

    const {
        completed, priority, type,
    } = status;
    
    const {
        createdAt, updatedAt, dueDate
    } = time;

    
    const [updateTodoStatus] = useMutation(UPDATE_TODO_STATUS);
    const [updateTodo] = useMutation(UPDATE_TODO);
    const [deleteTodo, { loading: deleteLoading }] = useMutation(DELETE_TODO);

    const [statusTask, setStatusTask] = useState(completed);
    const [statusEditing, setStatusEditing] = useState<boolean>(false);
    const [editedDesc, setEditingDesc] = useState(description);
    //const [editedTitle, setEditedTitle] = useState(title);

    const handleStatusChange = async (): Promise<void> => {
        const newStatus = !statusTask;
        setStatusTask(newStatus);

        try {
            await updateTodoStatus({
                variables: {
                    id: id.toString(),
                    status: {
                        completed: newStatus,
                    }
                },
                optimisticResponse: {
                    updateTodoStatus: {
                        id: id.toString(),
                        status: {
                            completed: newStatus,
                            priority,
                            type,
                            __typename: "Todo_status"
                        },
                        __typename: "TODO"
                    }
                }
            });
        } catch (error) {
            setStatusTask(!newStatus);
            console.error("Failed to update status:", error);
        }
    }

    const handleDelete = async (): Promise<void> => {
        try {
            await deleteTodo({
                variables: { id: id.toString()},
                update: (cache) => {
                    cache.modify({
                        fields: {
                            todos(existingTodos = [], { readField }) {
                                return existingTodos.filter(
                                    (todoRef: any) => readField('id', todoRef) !== id.toString()
                                );
                            },
                        },
                    })
                },
            })
        } catch (error) {
            console.error("Failed to delete todo:", error);
        }
    }

    const handleEdiDescChange = async (): Promise<void> => {
        if(editedDesc === description) {
            setStatusEditing(false);
            return;
        }

        try {
            await updateTodo({
                variables: {
                    id: id.toString(),
                    input: {
                        main: {
                            title,
                            description: editedDesc
                        },
                        status: {
                            completed: statusTask,
                            priority,
                            type,
                        },
                        time: {
                            createdAt,
                            updatedAt: new Date(),
                            dueDate,
                        }
                    },
                },
            })
            setStatusEditing(false);
        } catch(error) {
            setEditingDesc(description);
            console.error("Failed to update description:", error);
        }
    } 

    return(
        <article 
            key={id}
            className="flex items-center rounded-3xl px-4 py-5 w-full h-auto border gap-1 border-black"
        >
            <Checkbox 
                checked={statusTask}
                onChange={handleStatusChange}
            />
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
                            {statusEditing ? (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={editedDesc}
                                        onChange={(e) => setEditingDesc(e.target.value)}
                                        onBlur={handleEdiDescChange}
                                        className="px-2 py-1 border rounded"
                                        autoFocus
                                        placeholder="description"
                                    />
                                </div>
                            ) : (
                                <div
                                    onClick={() => setStatusEditing(true)}
                                    className="cursor-pointer"
                                >
                                    {description}
                                </div>
                            )}
                        </DashBoardBlock>
                        <ButtonEdDel 
                            onDelete={handleDelete}
                            disabled={deleteLoading}
                        />
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