import { describe, expect, it, beforeAll, beforeEach, jest } from "@jest/globals";
import Util from "../../src/util.js";

describe("#Util - Strings", () => {

    beforeEach(() => {
        jest.restoreAllMocks();
        jest.clearAllMocks();
    })

    describe("#upperCaseFirstLetter", () => {
        it("should upper case the first letter of a string", () => {
            const result = Util.upperCaseFirstLetter("hello");
            expect(result).toBe("Hello");
        });

        it("should return empty when string is empty", () => {
            const result = Util.upperCaseFirstLetter("");
            expect(result).toBe("");
        });
    });

    describe("#lowerCaseFirstLetter", () => {
        it("should lower case the first letter of a string", () => {
            const result = Util.lowerCaseFirstLetter("Byebye");
            expect(result).toBe("byebye");
        });

        it("should return empty when string is empty", () => {
            const result = Util.lowerCaseFirstLetter("");
            expect(result).toBe("");
        });
    });
});