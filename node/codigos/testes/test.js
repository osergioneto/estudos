const assert = require("assert");
const { obterPessoas } = require("./service");

describe("Star Wars Tests", () => {
  it("should fetch r2d2 with correct format", async () => {
    const expected = [{ nome: "R2-D2", altura: "96" }];
    const baseName = "r2-d2";
    const result = await obterPessoas(baseName);

    assert.deepEqual(result, expected);
  });
});
