import { InMemoryCache } from "@apollo/client";
import { ApolloClient, createHttpLink } from "@apollo/client";
import { Query } from "mongoose";

const httpLink = createHttpLink({
    uri: "http://localhost:3000/api/graphql",
});

const client  = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    todos: {
                        merge(existing, incoming) {
                            return incoming;
                        }
                    }
                }
            }
        }
    })
})

export default client;