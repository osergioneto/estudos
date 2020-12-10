function info() {
    return `This is the API of Hackernews clone.`
}

async function feed(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            { description_contais: args.fitler },
            { url_contains: args.filter },
        ],
    } : {};

    const links = await context.prisma.links({
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy
    });

    const count = await context.prisma
        .linksConnection({
            where,
        })
        .aggregate()
        .count();

    return {
        links,
        count,
    };
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