"use client";

import { todoTasks } from "@/app/constants/todos";
import { Todo } from "@/types/todo";
//TODO: add logic, all elements and make component

import { useState } from "react";
import TodoItem from "./todoItem";

export default function TodoList() {
    const [listTodos, setListTodos] = useState<Todo[]>(todoTasks);

    return(
        <section className="flex bg-white h-[350px] w-full">
            <TodoItem 
                
            />
        </section>
    )
}