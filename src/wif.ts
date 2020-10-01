// @ts-ignore
import wif from "wif";

import { IKeyPair } from "./contracts";
import { Keys } from "./keys";

export class WIF {
    public static fromPassphrase(passphrase: string, options: { wif: number }): string {
        const { compressed, privateKey }: IKeyPair = Keys.fromPassphrase(passphrase);

        return wif.encode(options.wif, Buffer.from(privateKey, "hex"), compressed);
    }

    public static fromKeys(keys: IKeyPair, options: { wif: number }): string {
        return wif.encode(options.wif, Buffer.from(keys.privateKey, "hex"), keys.compressed);
    }
}
