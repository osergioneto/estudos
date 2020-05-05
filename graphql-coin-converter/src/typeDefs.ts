import { gql } from "apollo-server";

export const typeDefs = gql`
    type Hello {
        message: String!
    }

    type Exchange {
        date: String!
        tariffDescription: String!
        real: String!
        dolar: String!
        euro: String!
    }

    type Query {
        exchange(url: String): Exchange
    }

    type Mutation {
        hello: Hello!
    }
`;
