import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    areWeCovered,
    createMatrix
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5, 7, 8])).toBe(8);
        expect(sumMultiples([1, 2, 3, 4, 5, 6])).toBe(14);
    });
    test("returns 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 4, 7, 8, 14])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("return true depending on whether it is a valid DNA string.", () => {
        expect(isValidDNA("GATTACA")).toBe(true);
        expect(isValidDNA("GATTACAGATTACA")).toBe(true);

    });
    test("return false depending on whether it is a valid DNA string.", () => {
        expect(isValidDNA("GATTICAA")).toBe(false);
        expect(isValidDNA("GATTICAAGATTOCAA")).toBe(false);

    });
});

describe("getComplementaryDNA", () => {
    test("return a string of the complementary base pairs.", () => {
        expect(getComplementaryDNA("GATTACA")).toBe("CTAATGT");
        expect(() => { getComplementaryDNA("GATTICAA") }).toThrow();
    });

});

describe("isItPrime", () => {
    test("return true/false depending on whether it is a prime number or not", () => {
        expect(isItPrime(97)).toBe(true);
        expect(isItPrime(100000267)).toBe(true);
        expect(isItPrime(98)).toBe(false);
        expect(isItPrime(100000268)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("function should receive a number and return an array of n arrays, each filled with n items. The parameter 'fill' should be used as the filler of the arrays.", () => {
        expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
        expect(createMatrix(2, "bar")).toEqual([["bar", "bar"], ["bar", "bar"]]);
    });
});

describe("areWeCovered", () => {
    test("return true if there are at least three staff scheduled for the given day.", () => {
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Brian", rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
            { name: "Abdul", rota: ["Monday", "Tuesday", "Wednesday", "Friday"] },
        ];
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
        expect(areWeCovered(staff, "Thursday")).toBe(false);
        expect(areWeCovered(staff, "Friday")).toBe(true);
        expect(areWeCovered(staff, "Saturday")).toBe(false);
        expect(areWeCovered(staff, "Sunday")).toBe(false);
    });
});