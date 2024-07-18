import { describe, expect, it, beforeAll, beforeEach, jest } from "@jest/globals";
import fs from "node:fs/promises";
import { createFiles } from "../../src/createFiles.js";
import templates from "../../src/templates/index.js";

describe("#Layers - Files Structure", () => {
    const defaultLayers = ["service", "factory", "repository"];
    const defaultConfig = {
        mainPath: "./",
        defaultMainFolder: "src",
        layers: defaultLayers,
        componentName: "heroes"
    }

    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    })

    it("should not create file structure on inexistent templates", async () => {
        const config = {
            ...defaultConfig,
            layers: ["inexistent"]
        };

        const result = await createFiles(config);
        const expected = { error: "the chosen layer does not have a template" };

        expect(result).toStrictEqual(expected);
    });

    it("repository should not add any additional dependencies", async () => {
        jest.spyOn(fs, fs.writeFile.name).mockResolvedValue()
        jest.spyOn(templates, templates.repositoryTemplate.name).mockReturnValue({ className: "", template: "" })

        const config = {
            ...defaultConfig,
            layers: ["repository"]
        };

        const result = await createFiles(config);
        const expected = { success: true };

        expect(result).toStrictEqual(expected);

        expect(fs.writeFile).toHaveBeenCalledTimes(config.layers);
        expect(templates.repositoryTemplate).toHaveBeenCalledWith(config.componentName);
    });

    it.todo("service should have repository as dependecy");
    it.todo("factory should have service and repository as dependencies")
});