// tslint:disable-next-line:no-var-requires
const dotenv = require("dotenv").config();
import { Context } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import * as jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import * as def from "./generated/graphql";
import { CurrencyConversions, GraduationTypes } from "./models";

interface IJWTPayload {
    user: {
        id: string;
        name: string;
    };
}

export const resolvers: def.Resolvers = {
    Query: {
        hello: async () => {
            return ({ message: "world"});
        },
    },
    Mutation: {
    },
};

export const context = (ctx: Context<ExpressContext>) => {
    const jwtToken = (ctx && ctx.req && ctx.req.headers && ctx.req.headers.authorization) || "";
    let jwtPayload = null;

    try {
        jwtPayload = jwt.verify(jwtToken.replace("Bearer ", ""), process.env.JWT_SECRET!);
    } catch (err) {
        jwtPayload = null;
    }

    return {
        auth: jwtPayload as IJWTPayload | null,
    };
};
