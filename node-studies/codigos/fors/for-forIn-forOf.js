const service = require("./service");

async function main() {
  try {
    const { results } = await service.obterPessoas("a");
    const pessoas = [];

    console.time("for");
    for (let i = 0; i < results.length; i++) {
      pessoas.push(results[i].name);
    }
    console.timeEnd("for");

    console.time("forIn");
    for (let result in results) {
      pessoas.push(results[result].name);
    }
    console.timeEnd("forIn");

    console.time("forOf");
    for (const result of results) {
      pessoas.push(result.name);
    }
    console.timeEnd("forOf");

    console.log(pessoas);
  } catch (error) {
    console.log("Erro interno: ", error);
  }
}

main();
