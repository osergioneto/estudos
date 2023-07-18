/* eslint-disable */
import { BaseApiConfig, Context, Fatal } from "@sdkgen/node-runtime";
export { Fatal } from "@sdkgen/node-runtime";

export interface PostAuthor {
    name: string
}

export interface Post {
    id: string
    title: string
    body: string
    createdAt: Date
    author: PostAuthor
}

export class ApiConfig<ExtraContextT> extends BaseApiConfig<ExtraContextT> {
    declare fn: {
        getPost: (ctx: Context & ExtraContextT, args: {id: string}) => Promise<Post | null>
        addNumber: (ctx: Context & ExtraContextT, args: {first: number, second: number}) => Promise<number>
    }

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
    } as const
}

export const api = new ApiConfig<{}>();
