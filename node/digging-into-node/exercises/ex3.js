#!/usr/bin/env node

"use strict";

const util = require("util");
const path = require("path");
const fs = require("fs");
const zlib = require("zlib");
const Transform = require("stream").Transform;

const args = require("minimist")(process.argv.slice(2), {
    boolean: ["help", "in", "out", "compress", "uncompress"],
    string: ["file"]
});

const BASE_PATH = path.resolve(process.env.BASE_PATH || __dirname);

let OUT_FILE = path.join(BASE_PATH, "out.txt");

if (args.help) {
    printHelp();
}
else if (args.in || args._.includes("-")) {
    processFile(process.stdin);
}
else if (args.file) {
    let stream = fs.createReadStream(path.join(BASE_PATH, args.file));
    processFile(stream);
    console.log("Complete Stream");
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

async function processFile(inputStream) {
    let outputStream = inputStream;

    if (args.uncompress) {
        let gunzipStream = zlib.createGunzip();
        outputStream = outputStream.pipe(gunzipStream);
    }

    const upperStream = new Transform({
        transform(chunk, encoding, cb) {
            this.push(chunk.toString().toUpperCase());
            cb();
        }
    });

    outputStream = outputStream.pipe(upperStream);

    if (args.compress) {
        let gzipStream = zlib.createGzip();
        outputStream = outputStream.pipe(gzipStream);
        OUT_FILE = `${OUT_FILE}.gz`
    }

    let targetStream;
    if (args.out) {
        targetStream = process.stdout
    } else {
        targetStream = fs.createWriteStream(OUT_FILE);
    }

    outputStream.pipe(targetStream);
    await streamComplete(outputStream);
}

function streamComplete(stream) {
    return new Promise(res => stream.on("end", () => { }));
}

function printHelp() {
    console.log("ex3 usage:");
    console.log("ex3.js --file={FILENAME}");
    console.log("--help                    print this help");
    console.log("--file={FILENAME}         process the file");
    console.log("--in, -                   process stdin");
    console.log("--out,                    print to stdout");
    console.log("--compress,               compress output to gzip");
    console.log("--uncompress,             uncompress gzip input");
}
