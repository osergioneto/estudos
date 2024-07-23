import { afterAll, describe, expect, it, beforeAll, beforeEach, jest } from "@jest/globals";
import fs from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createLayersIfNotExists } from "../../src/createLayers";

describe("#Integration - Files - Files Structure", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    it("should create folders if it doesnt exists", async () => { });
});