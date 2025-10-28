import { gql } from "@apollo/client";

export const ADD_TODO = gql`
    mutation AddTodo($input: TodoInput!) {
        addTodo(input: $input) {
        id
        main {
            title
            description
        }
        status {
            completed
            priority
            type
            archived
        }
        time {
            createdAt
            updatedAt
            dueDate
        }
        extra {
            tags
            subTasks {
                id
                }
            }
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation UpdateTodo($id: Int!, $input: TodoInput!) {
        updateTodo(id: $id, input: $input) {
        id
        main {
            title
            description
        }
        status {
            completed
            priority
            type
            archived
        }
        time {
            createdAt
            updatedAt
            dueDate
        }
        extra {
            tags
            subTasks {
                id
                }
            }
        }
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($id: ID!) {
        deleteTodo(id: $id)
    }
`;

export const UPDATE_TODO_STATUS = gql`
    mutation UpdateTodoStatus($id: ID!, $status: TodoStatusInput!) {
        updateTodoStatus(id: $id, status: $status) {
        id
        status {
            completed
            priority
            type
        }
        }
    }
`;