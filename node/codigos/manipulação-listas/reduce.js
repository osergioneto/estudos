const { obterPessoas } = require("./service");

async function main() {
    try {
        const { results } = await obterPessoas('a');
        const alturas = results.map(pessoa => parseInt(pessoa.height));
        console.log({ alturas });
        const alturaTotal = alturas.reduce((previous, current) => {
            return previous + current;
        })
        console.log({ alturaTotal });
    } catch (error) {
        console.log("VIXXXXI, ", error);
    }
}

main();