import { afterAll, describe, expect, it, beforeAll, beforeEach, jest } from "@jest/globals";
import fs from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createLayersIfNotExists } from "../../src/createLayers";

async function getFolders(config) {
    return fs.readdir(join(config.mainPath, config.defaultMainFolder))
}

describe("#Integration - Layers - Folders Structure", () => {
    const config = {
        mainPath: "", defaultMainFolder: "src", layers: ["repository", "factory", "service"].sort()
    };
    beforeAll(async () => {
        config.mainPath = await fs.mkdtemp(join(tmpdir(), "skeleton-"));
    });

    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    afterAll(async () => {
        await fs.rm(config.mainPath, { recursive: true });
    });

    it("should create folders if it doesnt exists", async () => {
        const beforeRun = await fs.readdir(config.mainPath);
        console.log("beforeRun: ", beforeRun);

        await createLayersIfNotExists(config);

        const afterRun = await getFolders(config);

        expect(beforeRun).not.toStrictEqual(afterRun);
        expect(afterRun).toEqual(config.layers);
    });

    it("should not create folders if it exists", async () => {

    });
});