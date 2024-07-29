import fs from "node:fs/promises";

export async function createLayersIfNotExists({ mainPath, defaultMainFolder, layers }) {
    const defaultPath = `${mainPath}/${defaultMainFolder}`;
    const foldersToCreate = layers.filter(async layer => {
        try {
            const result = await fs.access(layer);
            return !!result;
        } catch (error) {
            return false;
        }
    });
    const results = foldersToCreate.map(folder => fs.mkdir(`${defaultPath}/${folder}`, { recursive: true }));

    return Promise.all(results);
}