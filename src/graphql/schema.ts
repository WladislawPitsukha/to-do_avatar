import { gql } from 'graphql-tag';

export const typeDefs = gql`
    type Todo {
        id: ID!
        main: Todo_main!
        status: Todo_status!
        time: Todo_time!
        extra: Todo_extra
    }
    type Todo_main {
        title: String!
        description: String
    }
    type Todo_status {
        completed: Boolean!
        priority: String!
        type: String!
        archived: Boolean
    }
    type Todo_time {
        createdAt: String!
        updatedAt: String!
        dueDate: String!
    }
    type Todo_extra {
        tags: [String]
        subTasks: [Todo]
    }
    type Todo {
        id: ID!
        main: Todo_main!
        status: Todo_status!
        time: Todo_time!
        extra: Todo_extra
    }
    type Query {
        todos: [Todo!]!
        todo(id: ID!): Todo
    }
    input Todo_mainInput {
        title: String!
        description: String
    }
    input Todo_statusInput {
        completed: Boolean!
        priority: String!
        type: String!
        archived: Boolean
    }
    input Todo_timeInput {
        createdAt: String!
        updatedAt: String!
        dueDate: String!
    }
    input Todo_extraInput {
        tags: [String]
        subTasks: [TodoInput]
    }
    input TodoInput {
        main: Todo_mainInput!
        status: Todo_statusInput!
        time: Todo_timeInput!
        extra: Todo_extraInput
    }
    type Mutation {
        createTodo(input: TodoInput!): Todo!
        updateTodo(id: ID!, input: TodoInput!): Todo!
        deleteTodo(id: ID!): Boolean!
    }
`;