import { describe, expect, it, beforeAll, beforeEach, jest } from "@jest/globals";
import templates from "../../src/templates/index";
import { repositoryTemplateMock } from "./mocks/index";

const { repositoryTemplate } = templates;

describe("#Templates", () => {
    const componentName = "product";
    const repositoryName = `${componentName}Repository`;

    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    })

    it("should generate repository from template", () => {
        const expected = {
            fileName: repositoryName,
            template: repositoryTemplateMock
        }
        const result = repositoryTemplate(componentName);
        console.log("repositoryName: ", repositoryName);
        console.log("result: ", result);
        expect(result).toStrictEqual(expected);
    });

    it.todo("should generate service template");
    it.todo("should generate factory template");
});