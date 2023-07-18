"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.ApiConfig = exports.Fatal = void 0;
/* eslint-disable */
const node_runtime_1 = require("@sdkgen/node-runtime");
var node_runtime_2 = require("@sdkgen/node-runtime");
Object.defineProperty(exports, "Fatal", { enumerable: true, get: function () { return node_runtime_2.Fatal; } });
class ApiConfig extends node_runtime_1.BaseApiConfig {
    astJson = {
        annotations: {},
        errors: [
            "Fatal"
        ],
        functionTable: {
            getPost: {
                args: {
                    id: "uuid"
                },
                ret: "Post?"
            },
            addNumber: {
                args: {
                    first: "int",
                    second: "int"
                },
                ret: "int"
            }
        },
        typeTable: {
            PostAuthor: {
                name: "string"
            },
            Post: {
                id: "uuid",
                title: "string",
                body: "string",
                createdAt: "datetime",
                author: "PostAuthor"
            }
        }
    };
}
exports.ApiConfig = ApiConfig;
exports.api = new ApiConfig();
