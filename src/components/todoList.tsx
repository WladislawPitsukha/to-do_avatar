"use client";

//TODO: add mutations/func for delete || COMPONENT_TODO-ITEM
//TODO: add mutations/func for update status || COMPONENT_TODO-ITEM
//TODO: add mutations/func to change task || COMPONENT_TODO-ITEM
//TODO: optimize re-rendering of TodoItem components || COMPONENT_TODO-ITEM
//TODO: add sections for filtering and sorting
//TODO: add optimistic UI updates
//TODO: add loading states for mutations 
//TODO: handle errors from mutations

import { Todo } from "@/types/todo";
import TodoItem from "./todoItem";
import { todoTasks } from "@/app/constants/todos";
import { GET_TODOS } from "@/graphql/queries";
import { useMutation, useQuery } from "@apollo/client/react";
import { UPDATE_TODO_STATUS } from "@/graphql/mutations";

export default function TodoList() {
    const {data, loading: queryLoading, error: queryError} = useQuery(GET_TODOS);
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

    if (queryLoading) return <div>Loading...</div>;
    if (queryError) return <div>Error loading todos: {queryError.message}</div>;
    if (mutationError) return <div>Error updating todo: {mutationError.message}</div>;

    return (
        <section className="flex flex-col bg-white h-auto w-full gap-3">
            {data.todos}
        </section>
    );
}