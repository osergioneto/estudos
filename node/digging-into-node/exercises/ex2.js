#!/usr/bin/env node

"use strict";

const util = require("util");
const path = require("path");
const fs = require("fs");
const Transform = require("stream").Transform;

const args = require("minimist")(process.argv.slice(2), {
    boolean: ["help", "in", "out"],
    string: ["file"]
});

const BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

const OUT_FILE = path.join(BASE_PATH, "out.txt");

if (args.help) {
    printHelp();
}
else if (args.in || args._.includes("-")) {
    processFile(process.stdin);
}
else if (args.file) {
    let stream = fs.createReadStream(path.join(BASE_PATH, args.file));
    processFile(stream);
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

function processFile(inputStream) {
    let outputStream = inputStream;

    const upperStream = new Transform({
        transform(chunk, encoding, cb) {
            this.push(chunk.toString().toUpperCase());
            cb();
        }
    });

    let targetStream;
    if (args.out) {
        targetStream = process.stdout
    } else {
        targetStream = fs.createWriteStream(OUT_FILE);
    }

    outputStream = outputStream.pipe(upperStream);
    outputStream.pipe(targetStream);
}

function printHelp() {
    console.log("ex1 usage:");
    console.log("ex1.js --file={FILENAME}");
    console.log("--help                    print this help");
    console.log("--file={FILENAME}         process the file");
    console.log("--in, -                   process stdin");
    console.log("--out,                    print to stdout");
}
