import "jest-extended";

import { HashAlgorithms } from "./hash-algorithms";

const fixtures = {
    ripemd160: "a830d7beb04eb7549ce990fb7dc962e499a27230",
    sha1: "0a4d55a8d778e5022fab701977c5d840bbc486d0",
    sha256: "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e",
    hash160: "bdfb69557966d026975bebe914692bf08490d8ca",
    hash256: "42a873ac3abd02122d27e80486c6fa1ef78694e8505fcec9cbcc8a7728ba8949",
};

const buffer = Buffer.from("Hello World");

describe("HashAlgorithms", () => {
    it("should return valid ripemd160", () => {
        expect(HashAlgorithms.ripemd160(buffer).toString("hex")).toEqual(fixtures.ripemd160);
    });

    it("should return valid sha1", () => {
        expect(HashAlgorithms.sha1(buffer).toString("hex")).toEqual(fixtures.sha1);
    });

    it("should return valid sha256", () => {
        expect(HashAlgorithms.sha256(buffer).toString("hex")).toEqual(fixtures.sha256);
    });

    it("should return valid hash160", () => {
        expect(HashAlgorithms.hash160(buffer).toString("hex")).toEqual(fixtures.hash160);
    });

    it("should return valid hash256", () => {
        expect(HashAlgorithms.hash256(buffer).toString("hex")).toEqual(fixtures.hash256);
    });
});
