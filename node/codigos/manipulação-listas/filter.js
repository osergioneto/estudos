const { obterPessoas } = require("./service");

async function main() {
    const { results } = await obterPessoas("a");
    console.time("filter + map");
    const family = results.filter(person => person.name.toLowerCase().includes("vader") ? person : false).map(person => person.name);
    console.timeEnd("filter + map");
    console.log("Familia: ", family);
}

main();