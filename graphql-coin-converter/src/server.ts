import { ApolloServer } from "apollo-server";
import { context, resolvers } from "./resolvers";
import "./sequelize";
import { typeDefs } from "./typeDefs";

const PORT = process.env.PORT || "8000";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    cors: {
        origin: "*",
    },
    mocks: true,
});

server.listen(PORT).then(({ url }: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`);
});
