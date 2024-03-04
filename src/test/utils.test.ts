import { getStringInfo, toUpperCase } from "../app/utils";

describe("utils test suite", () => {
    it("should return uppercase", () => {
        // arrange system
        const sut = toUpperCase;
        const expected = "ABC";

        // act
        const actual = sut("abc");

        // assert
        expect(actual).toBe("ABC");
    });

    it.only("should return info for valid string", () => {
        const sut = getStringInfo;

        const actual = sut("My-String");

        expect(actual.lowerCase).toBe("my-string");
        expect(actual.extraInfo).toEqual({});

        expect(actual.characters.length).toBe(9);
        expect(actual.characters).toHaveLength(9);

        expect(actual.characters).toEqual([
            "M",
            "y",
            "-",
            "S",
            "t",
            "r",
            "i",
            "n",
            "g",
        ]);
        expect(actual.characters).toContain<string>("M");

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();
    });
});
