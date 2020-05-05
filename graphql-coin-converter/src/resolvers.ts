// tslint:disable-next-line:no-var-requires
const dotenv = require("dotenv").config();
import { Context } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import axios from "axios";
import * as def from "./generated/graphql";
import { getTariff } from "./helpers/crawler";
import { exchangeTariff } from "./helpers/utils";
import { CurrencyConversions } from "./models";

export const resolvers: def.Resolvers = {
    Query: {
        exchange: async (_, { url }, ctx): Promise<Omit<def.Exchange, "__typename">> => {
            try {
                const tariff = await getTariff(url ? url : process.env.CRAWL_URL!);
                const { data: { date, rates } } = await axios.get("https://api.exchangeratesapi.io/latest?base=BRL&symbols=USD,EUR");

                return {
                    date,
                    tariffDescription: tariff,
                    real: exchangeTariff(tariff, 1),
                    dolar: exchangeTariff(tariff, rates.USD),
                    euro: exchangeTariff(tariff, rates.EUR),
                };
            } catch (error) {
                return error.message;
            }
        },
    },
    Mutation: {
        hello: async () => {
            return ({ message: "world"});
        },
    },
};

export const context = (ctx: Context<ExpressContext>) => {
    return {
    };
};
