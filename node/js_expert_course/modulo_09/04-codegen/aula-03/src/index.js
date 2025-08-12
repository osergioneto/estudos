#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { createLayersIfNotExists } from "./createLayers.js";
import { createFiles } from "./createFiles.js";

const { argv: { componentName } } = yargs(hideBin(process.argv))
    .command("skeleton", "create project skeletion", (builder) => {
        return builder
            .option("component-name", {
                alias: "c",
                demandOption: true,
                describe: "component's name",
                type: "array"
            })
            .example("skeleton --component-name product", "creates a project with a single domain")
            .example("skeleton -c product -c person -c colors", "creates a project with a list of domains")
    })
    .epilog("copyright 2024 - Sérgio Neto")

const env = process.env.NODE_ENV
const defaultMainFolder = env === "dev" ? "tmp" : "src";


console.log("defaultMainFolder: ", defaultMainFolder);
console.log("env: ", env);


const layers = ["repository", "service", "factory"].sort();
const config = {
    layers,
    defaultMainFolder,
    mainPath: "."
}

await createLayersIfNotExists(config);

const pendingPromises = [];
for (const domain of componentName) {
    const result = createFiles({
        ...config,
        componentName: domain
    });
    pendingPromises.push(result);
}

await Promise.all(pendingPromises);