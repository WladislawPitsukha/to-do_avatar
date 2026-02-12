"use client";

import { Todo, Todo_status } from "@/types/type";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

interface InputFormProps {
    onSubmit: (todo: Todo) => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [priority, setPriority] = useState<Todo_status["priority"]>("medium");
    const [type, setType] = useState<Todo_status["type"]>("task");
    const [dueDate, setDueDate] = useState<Date | string>(new Date());
    const [tags, setTags] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTodo: Todo = {
            id: Date.now(),
            main: {
                title,
                description,
            },
            status: {
                completed: false,
                priority,
                type,
            },
            time: {
                createdAt: new Date(),
                updatedAt: new Date(),
                dueDate: new Date(dueDate),
            },
            extra: {
                tags: tags.split(", ").map(tag => tag.trim()),
                subTasks: []
            }
        };

        onSubmit(newTodo);
        resetForm();
    }

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setPriority("medium");
        setType("task");
        setDueDate(new Date());
        setTags("");
    }

    return(
        <form 
            action="Create Todo"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md"
        >
            <TextField 
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fullWidth
            />
            <TextField 
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                multiline
                rows={3}
                fullWidth
            />
            <div className="flex gap-4">
                <FormControl fullWidth>
                    <InputLabel>
                        Priority
                    </InputLabel>
                    <Select
                        value={priority}
                        label="Priority"
                        onChange={(e) => setPriority(e.target.value as Todo_status['priority'])}
                    >
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>
                        Type
                    </InputLabel>
                    <Select
                        value={type}
                        label="Type"
                        onChange={(e) => setType(e.target.value as Todo_status['type'])}
                    >
                        <MenuItem value="task">Task</MenuItem>
                        <MenuItem value="event">Event</MenuItem>
                        <MenuItem value="note">Note</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <TextField
                label="Due Date"
                type="datetime-local"
                value={new Date(dueDate).toISOString().slice(0, 16)}
                onChange={(e) => setDueDate(new Date(e.target.value))}
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label="Tags (comma-separated)"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="work, urgent, meeting"
                fullWidth
            />
            <div className="flex justify-end gap-2">
                <Button
                    type="button"
                    variant="outlined"
                    onClick={resetForm}
                >
                    Reset
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                >
                    Add Todo
                </Button>
            </div>
        </form>
    )
}