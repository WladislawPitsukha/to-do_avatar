"use client";

//TODO: deleteTodo mutation not updating cache correctly
//TODO: Implement error handling for mutations
//TODO: Add loading states for mutations
//TODO: Optimize re-rendering of TodoItem components
//TODO: data.todos could be undefined, add checks

import { GET_TODOS } from "@/graphql/queries";
import { DELETE_TODO, UPDATE_TODO_STATUS } from "@/graphql/mutations";
import { Todo } from "@/types/todo";
import TodoItem from "./todoItem";
import { useMutation, useQuery } from "@apollo/client/react";

export default function TodoList() {
    const { data, loading, error } = useQuery(GET_TODOS);
    const [updateTodoStatus] = useMutation(UPDATE_TODO_STATUS);
    const [deleteTodoMutation] = useMutation(DELETE_TODO);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleDelete = async (id: number) => {
        try {
            await deleteTodoMutation({
                variables: { id: id.toString() },
                update: (cache, { data: { deleteTodo } }) => {
                    const existingTodos: any = cache.readQuery({ query: GET_TODOS });
                    if (existingTodos) {
                    cache.writeQuery({
                        query: GET_TODOS,
                        data: {
                        todos: existingTodos.todos.filter((todo: Todo) => todo.id !== id),
                        },
                    });
                    }
                },
            });
        } catch (err) {
            console.error("Error deleting todo:", err);
        }
    };

    const handleStatusChange = async (id: number, status: Todo["status"]) => {
        try {
        await updateTodoStatus({
            variables: {
            id: id.toString(),
            status: {
                completed: status.completed,
                priority: status.priority,
                type: status.type,
            },
            },
        });
        } catch (err) {
        console.error("Error updating todo status:", err);
        }
    };

    return (
        <section className="flex flex-col bg-white h-auto w-full gap-3">
            {data?.todos?.map((todo: Todo) => (
                <TodoItem 
                    key={todo.id}
                    {...todo}
                    onDelete={() => handleDelete(todo.id)}
                    onStatusChange={(status) => handleStatusChange(todo.id, status)}
                />  
            ))}
        </section>
    );
}
