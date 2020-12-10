import { ApolloServer } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import { execSync } from "child_process";
import * as express from "express";
import { CurrencyConversions } from "../models/";
import { context, resolvers } from "../resolvers";
import { typeDefs } from "../typeDefs";

export const constructTestClient = (customReq: Partial<express.Request> = {}) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () =>
            context({
                req: customReq,
                res: {},
            }),
    });

    return createTestClient(server);
};
