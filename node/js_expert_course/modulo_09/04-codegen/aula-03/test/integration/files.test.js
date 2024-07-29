import { afterAll, describe, expect, it, beforeAll, beforeEach, jest } from "@jest/globals";
import fs from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createLayersIfNotExists } from "../../src/createLayers";
import { createFiles } from "../../src/createFiles";
import Util from "../../src/util";
import { create } from "node:domain";

async function generateFilePath({ mainPath, defaultMainFolder, layers, componentName }) {
    return layers.map(layer => {
        const filename = `${componentName}${Util.upperCaseFirstLetter(layer)}.js`;
        return join(mainPath, defaultMainFolder, layer, filename);
    });
}

function getAllFunctionsFromInstace(instance) {
    return Reflect.ownKeys(Reflect.getPrototypeOf(instance)).filter(method => method !== 'constructor');
}

describe("#Integration - Files - Files Structure", () => {
    const config = {
        mainPath: "",
        defaultMainFolder: "src",
        layers: ["repository", "factory", "service"].sort(),
        componentName: "heroes"
    };

    const packageJSON = "package.json";
    const packageJSONLocation = join(`./test/integration/mocks/${packageJSON}`);

    beforeAll(async () => {
        config.mainPath = await fs.mkdtemp(join(tmpdir(), "skeleton-"));
        await fs.copyFile(packageJSONLocation, join(config.mainPath, packageJSON));
        createLayersIfNotExists(config);
    });

    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    afterAll(async () => {
        await fs.rm(config.mainPath, { recursive: true });
    });

    it("Repository class should have create, read, update and delete methods", async () => {
        const myConfig = {
            ...config,
            layers: ["repository"]
        }

        await createFiles(myConfig);
        const [repositoryFile] = generateFilePath();
        const { default: Repository } = await import(repositoryFile);
        const instance = new Repository();
        const expectNotImplemented = fn => expect(() => fn.call()).rejects.toEqual("method not implemented!");

        expectNotImplemented(instance.create);
        expectNotImplemented(instance.read);
        expectNotImplemented(instance.update);
        expectNotImplemented(instance.delete);
    });

    it("Service should have the same signature of repository and call all its methods", async () => {
        const myConfig = {
            ...config,
            layers: ["repository", "service"]
        }

        await createFiles(myConfig);
        const [repositoryFile, serviceFile] = generateFilePath();

        const { default: Repository } = await import(repositoryFile);
        const { default: Service } = await import(serviceFile);

        const repository = new Repository();
        const service = new Repository({ repository });

        const allRepositoryMethods = getAllFunctionsFromInstace(repository);

        allRepositoryMethods
            .forEach(method => jest.spyOn(repository, method).mockResolvedValue());

        getAllFunctionsFromInstace(service)
            .forEach(method => service[method].call(service, []));

        allRepositoryMethods
            .forEach(method => expect(repository[method]).toHaveBeenCalled());
    });

    it("Factory instance should match layers", async () => {
        const myConfig = {
            ...config
        }

        await createFiles(myConfig);
        const [factoryFile, , serviceFile] = generateFilePath();

        const { default: Repository } = await import(repositoryFile);
        const { default: Service } = await import(serviceFile);
        const { default: Factory } = await import(factoryFile);

        const repository = new Repository();
        const service = new Repository({ repository });
        const factory = new Repository({ repository, service });

        const expectedInstance = new Service({ repository });
        const instance = Factory.getInstance();

        expect(instance).toMatchObject(expectedInstance);
        expect(instance).toBeInstanceOf(Service);
    });
});