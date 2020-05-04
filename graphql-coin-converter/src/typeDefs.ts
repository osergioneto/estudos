import { gql } from "apollo-server";

export const typeDefs = gql`
    type Hello {
        message: String!
    }

    type Query {
        hello: Hello!
    }

    type Mutation {
    }
`;
