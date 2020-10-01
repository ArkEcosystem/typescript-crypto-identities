export interface KeyPair {
    publicKey: string;
    privateKey: string;
    compressed: boolean;
}

export interface IDecryptResult {
    privateKey: Buffer;
    compressed: boolean;
}

export interface IMultiSignatureLegacyAsset {
    min: number;
    lifetime: number;
    keysgroup: string[];
}

export interface IMultiSignatureAsset {
    min: number;
    publicKeys: string[];
}
