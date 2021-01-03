#!/usr/bin/env node

"use strict";

const util = require("util");
const path = require("path");
const fs = require("fs/promises");
const getStdin = require("get-stdin");

const args = require("minimist")(process.argv.slice(2), {
    boolean: ["help"],
    string: ["file"]
});

const BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

if (args.help) {
    printHelp();
}
else if (args.in || args._.includes("-")) {
    getStdin().then(processFile).catch(error)
}
else if (args.file) {
    fs.readFile(path.join(BASE_PATH, args.file))
        .then(data => {
            processFile(data.toString());
        })
        .catch(err => {
            error(err.toString());
        })
}
else {
    error("Incorrect usage", true);
}

// *************

function error(msg, includeHelp = false) {
    console.error(msg);
    if (includeHelp) {
        printHelp();
    }
}

function processFile(content) {
    content = content.toString().toUpperCase();
    process.stdout.write(content);
}

function printHelp() {
    console.log("ex1 usage:");
    console.log("ex1.js --file={FILENAME}");
    console.log("--help                    print this help");
    console.log("--file={FILENAME}         process the file");
    console.log("--in, -                   process stdin");
}

// console.log("Hello World");
// process.stdout.write("Hello World :D\n");

// console.error("Oooops");
// process.stderr.write("Eita. Deu ruim\n");