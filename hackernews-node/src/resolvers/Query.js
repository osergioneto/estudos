function info() {
    return `This is the API of Hackernews clone.`
}

function feed(parent, args, context, info) {
    return context.prisma.links();
}

function link(parent, args, context, info) {
    return context.prisma.links.find((element) => {
        if(args.id === element.id) {
            return element;
        }
    });
}

module.exports = {
    info,
    feed,
    link
}