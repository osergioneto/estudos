"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_runtime_1 = require("@sdkgen/node-runtime");
const api_1 = require("./api");
api_1.api.fn.getPost = async (ctx, { id }) => {
    return {
        id,
        title: "Primeira postagem",
        author: {
            name: "John Doe"
        },
        body: "Lorem ipsum",
        createdAt: new Date()
    };
};
api_1.api.fn.addNumber = async (ctx, { first, second }) => first + second;
const server = new node_runtime_1.SdkgenHttpServer(api_1.api, {});
server.listen(8000);
