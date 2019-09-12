const { GraphQLServer } = require('graphql-yoga');

// Types


let links = [{
    "id": "link-0",
    "url": "www.howtographql.com",
    "description": "Fullstack tutorial for GraphQL"
  },
  {
    "id": "link-1",
    "url": "https://v8.dev/blog/v8-lite",
    "description": "In this post we highlight some of the key optimizations we developed and the memory savings they provided in real-world workloads."
  },
  {
    "id": "link-2",
    "url": "https://webkit.org/blog/9528/webgpu-and-wsl-in-safari/",
    "description": "WebGPU is a new API being developed by Apple and others in the W3C which enables high-performance 3D graphics and data-parallel computation on the Web. This API represents a significant improvement over the existing WebGL API in both performance and ease of use. Starting in Safari Technology Preview release 91, beta support is available for WebGPU API and WSL, our proposal for the WebGPU shading language."
  }]


// Resolvers
let idCount = links.length;
const resolvers = {
    Query: {
        info: () => `This is the API of Hackernews clone.`,
        feed: () => links,
        link: (parent, args) => {
            const link = links.find((element) => {
                if(args.id === element.id) {
                    return element;
                }
            })
            return link;
        }
    },
    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                url: args.url,
                description: args.description
            }
            links.push(link);
            return link;
        },
        updateLink: (parent, args) => {
            const linkUpdated = links.find((element) => {
                if(args.id === element.id) {
                    Object.keys(args).map((key, index) => {
                        if(args[key]) {
                            element[key] = args[key];
                        };
                    });
                    return element;
                };
            });
            return linkUpdated;
        },
        deleteLink: (parent, args) => {
            const linkDeleted = links.find((element, index) => {
                if(args.id === element.id) {
                    return links.splice(index, 1);
                }
            })
            return linkDeleted;
        }
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    }
}


// Server
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
});
server.start(() => console.log(`Server is running on port 4000. http://localhost:4000`))
