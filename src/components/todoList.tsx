"use clients";

import { todoTasks } from "@/app/constants/todos";
import { Todo } from "@/types/todo";
//TODO: add logic, all elements and make component

import { useState } from "react";

export default function TodoList() {
    const [listTodos, setListTodos] = useState<Todo[]>(todoTasks);

    return(
        <section>
            
        </section>
    )
}