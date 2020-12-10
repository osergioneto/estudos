const service = require("./service");

async function main() {
    try {
        const { results } = await service.obterPessoas('y');
        const namesForEach = [];
        console.time("forEach");
        results.forEach(item => {
            namesForEach.push(item.name);
        })
        console.timeEnd("forEach");
        console.log("namesForEach: ", namesForEach);

        console.time("map");
        const namesMap = results.map(item => item.name);
        console.timeEnd("map");
        console.log("namesMap: ", namesMap);
    } catch (error) {
        console.log("VIXXXXI, ", error);
    }
}

main();