import fs from "node:fs/promises";

export async function createLayersIfNotExists({ mainPath, defaultMainFolder, layers }) {
    const defaultPath = `${mainPath}/${defaultMainFolder}`;
    const foldersToCreate = layers.filter(layer => !fs.access(layer));
    const results = foldersToCreate.map(folder => fs.mkdir(`${defaultPath}/${folder}`, { recursive: true }));

    return Promise.all(results);
}