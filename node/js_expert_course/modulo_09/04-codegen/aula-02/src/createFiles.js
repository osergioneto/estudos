import fs from "node:fs/promises";
import templates from "./templates/index";

export async function createFiles({ mainPath, defaultMainFolder, layers, componentName }) {
    const keys = Object.keys(templates);

    for (const layer of layers) {
        const chosenTemplate = keys.find(key => key.includes(layer));

        if (!chosenTemplate) {
            return { error: "the chosen layer does not have a template" };
        }

        // fs.writeFile();
    }

    // return { success: true }; 
}