import { describe, expect, it, beforeAll, beforeEach, jest } from "@jest/globals";
import fs from "node:fs/promises";
import { createLayersIfNotExists } from "../../src/createLayers.js";

describe("#Layers - Folder Structure", () => {
    const defaultLayers = ["service", "factory", "repository"];
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    })

    it("should create folders if it doesnt exists", async () => {
        jest.spyOn(fs, fs.mkdir.name).mockResolvedValue();
        jest.spyOn(fs, fs.access.name).mockReturnValue(false);

        await createLayersIfNotExists({ mainPath: "", layers: defaultLayers });

        expect(fs.access).toHaveBeenCalledTimes(defaultLayers.length);
        expect(fs.mkdir).toHaveBeenCalledTimes(defaultLayers.length);
    });

    it("should not create folders if it exists", async () => {
        jest.spyOn(fs, fs.mkdir.name).mockResolvedValue();
        jest.spyOn(fs, fs.access.name).mockReturnValue(true);

        await createLayersIfNotExists({ mainPath: "", layers: defaultLayers });

        expect(fs.access).toHaveBeenCalledTimes(defaultLayers.length);
        expect(fs.mkdir).not.toHaveBeenCalledTimes(defaultLayers.length);
    });
});