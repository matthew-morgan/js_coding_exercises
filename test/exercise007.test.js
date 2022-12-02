import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} from "../challenges/exercise007";

describe("sumDigits", () => {
    test("takes a number, e.g. 123 and returns the sum of all its digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(456)).toBe(15);
    });
});

describe("createRange", () => {
    test("creates a range of numbers as an array. It receives a start, an end and a step. Step is the gap between numbers in the range", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
        expect(createRange(3, 11, 3)).toEqual([3, 6, 9]);
    });
});

describe("getScreentimeAlertList", () => {
    test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(users, "2019-05-03")).toEqual([]);
        expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);

    });
});

describe("hexToRGB", () => {
    test("takes a hexadecimal color code in the format #RRGGBB, converts it to RGB and returns it as a string", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
        expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
        expect(hexToRGB("#0100FF")).toBe("rgb(1,0,255)");
        expect(() => { hexToRGB("#FF11334"); }).toThrow("not a valid hex colour code");
        expect(() => { hexToRGB("#FG1133"); }).toThrow("not a valid hex colour code");
    });
});

describe("findWinner", () => {
    test("takes a noughts and crosses board 3x3 array and returns the winner if there is one and null if not", () => {
        const board1 = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ];

        const board2 = [
            ["X", "0", "0"],
            ["X", "0", "X"],
            ["0", "X", "0"]
        ];

        const board3 = [
            ["X", "0", "X"],
            ["0", "0", "X"],
            ["0", "X", "0"]
        ];

        const board4 = [
            ["X", "X", "0"],
            ["0", "0", "X"],
            ["0", "X", "0"]
        ];
        expect(findWinner(board1)).toBe("X");
        expect(findWinner(board2)).toBe("0");
        expect(findWinner(board3)).toBe(null);
        expect(findWinner(board4)).toBe("0");

    });
});