import { gql } from "@apollo/client";

export const GET_TODOS = gql`
    query GetTodos {
        todos {
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
                    main {
                        title
                    }
                }
            }
        }
    }
`;