import fs from "node:fs/promises";
import templates from "./templates/index.js";
import Util from "./util.js";

function defaultDependencies(layer, componentName) {
    const dependencies = {
        repository: [],
        service: [
            `${componentName}Repository`
        ],
        factory: [
            `${componentName}Repository`,
            `${componentName}Service`
        ]
    };

    return dependencies[layer].map(Util.lowerCaseFirstLetter);
}

async function executeWrites(pendingFilesToWrite) {
    return Promise.all(
        pendingFilesToWrite
            .map(({ fileName, txtFile }) => fs.writeFile(fileName, txtFile))
    );
}

export async function createFiles({ mainPath, defaultMainFolder, layers, componentName }) {
    const keys = Object.keys(templates);

    const pendingFilesToWrite = [];

    for (const layer of layers) {
        const chosenTemplate = keys.find(key => key.includes(layer));

        if (!chosenTemplate) {
            return { error: "the chosen layer does not have a template" };
        }

        const template = templates[chosenTemplate];
        const targetFolder = `${mainPath}/${defaultMainFolder}/${layer}`;
        const dependencies = defaultDependencies(layer, componentName);

        const { fileName: name, template: txtFile } = template(componentName, ...dependencies);
        const fileName = `${targetFolder}/${Util.lowerCaseFirstLetter(name)}.js`;

        pendingFilesToWrite.push({ fileName, txtFile });
    }

    await executeWrites(pendingFilesToWrite);

    return { success: true };
}