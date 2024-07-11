import { describe, expect, it, beforeEach, jest } from "@jest/globals";
import templates from "../../src/templates/index";
import { repositoryTemplateMock, serviceTemplateMock } from "./mocks/index";

const { repositoryTemplate, serviceTemplate } = templates;

describe("#Templates", () => {
    const componentName = "product";
    const repositoryName = `${componentName}Repository`;
    const serviceName = `${componentName}Service`;

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
        expect(result).toStrictEqual(expected);
    });

    it("should generate service from template", () => {
        const expected = {
            fileName: serviceName,
            template: serviceTemplateMock
        }
        const result = serviceTemplate(componentName, repositoryName);
        expect(result).toStrictEqual(expected);
    });


    it.todo("should generate factory template");
});