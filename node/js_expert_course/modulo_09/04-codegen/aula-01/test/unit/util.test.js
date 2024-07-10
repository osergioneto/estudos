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

        it.todo("should return null when string is empty");
    });

    describe("#lowerCaseFirstLetter", () => {
        it("should lower case the first letter of a string", () => {
            const result = Util.lowerCaseFirstLetter("Byebye");
            expect(result).toBe("byebye");
        });
        it.todo("should return null when string is empty");
    });
});