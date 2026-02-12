"use client";

//TODO: add sections for filtering & sorting
//TODO: add loading states for mutations 
//TODO: add optimistic UI updates
//TODO: handle errors from mutations

import TodoItem from "./ItemTodo";
import { todoTasks } from "@/app/constants/todos";
import { GET_TODOS } from "@/graphql/queries";
import { useMutation, useQuery } from "@apollo/client/react";
import { UPDATE_TODO_STATUS } from "@/graphql/mutations";
import { Todo } from "@/types/type";

interface GetListTODO {
    todos: Todo[];
}

export default function TodoList() {
    const {data, loading: queryLoading, error: queryError} = useQuery<GetListTODO>(GET_TODOS);
    const [updateTodoStatus, { loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_TODO_STATUS);

    const handleStatusUpdate = async (id: number, completed: boolean) => {
        try {
            await updateTodoStatus({
                variables: {
                    id: id.toString(),
                    status: {
                        completed,
                    }
                },
                optimisticResponse: {
                    updateTodoStatus: {
                        id: id.toString(),
                        status: {
                            completed,
                        }
                    }
                }
            })
        } catch (error) {
            console.error("Failed to update status:", error);
        }
    }

    //if (queryLoading) return <div>Loading...</div>;
    //if (queryError) return <div>Error loading todos: {queryError.message}</div>;
    //if (mutationError) return <div>Error updating todo: {mutationError.message}</div>;

    return (
        <section className="flex flex-col bg-white h-auto w-full gap-3">
            {data?.todos !== undefined ? (
                data.todos.map((todo: Todo) => (
                    <TodoItem 
                        key={todo.id}
                        {...todo}
                        onStatusUpdate={handleStatusUpdate}
                    />
                ))
            ) : (
                <div className="flex flex-col items-center justify-center w-full gap-4">
                    {queryLoading ? (
                        <div>Loading todos...</div>
                    ) : (
                        todoTasks.map((todo) => (
                            <TodoItem 
                                key={todo.id}
                                {...todo}
                                onStatusUpdate={handleStatusUpdate}
                            />
                        ))
                    )}
                </div>
            )}
            {todoTasks.map((todo) => (
                <TodoItem 
                    key={todo.id}
                    {...todo}
                    onStatusUpdate={handleStatusUpdate}
                />
            ))}
        </section>
    );
}