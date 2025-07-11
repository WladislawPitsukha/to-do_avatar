"use client";

import { todoTasks } from "@/app/constants/todos";
import { Todo } from "@/types/todo";
//TODO: add logic, all elements and make component

import { useState } from "react";
import TodoItem from "./todoItem";

export default function TodoList() {
    const [listTodos, setListTodos] = useState<Todo[]>(todoTasks);
    //TODO: add bytton Speed Dial for choose - chat with bot or add new task(form) 
    //TODO: add logic for add new task, delete task, change status of task
    return(
        <section className="flex flex-col bg-white h-[500px] w-full gap-3">
            {listTodos.map((obj, index) => (
                <TodoItem 
                    key={index}
                    id={obj.id}
                    main={obj.main}
                    status={obj.status}
                    time={obj.time}
                />  
            ))}
        </section>
    )
}