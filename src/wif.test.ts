import "jest-extended";

import { WIF } from "./wif";
import { data, passphrase } from "../test/identity.json";
import { devnet } from "../test/networks.json";

describe("Identities - WIF", () => {
    describe("fromPassphrase", () => {
        it("should be OK", () => {
            expect(WIF.fromPassphrase(passphrase, devnet)).toBe(data.wif);
        });
    });
});
