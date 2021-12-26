import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";
import { BigNumber } from "ethers";
import type { MerkleTree } from "merkletreejs";

import { OpenCred } from "../src/types/OpenCred";

declare module "mocha" {
  export interface Context {
    opencred: OpenCred;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
    students: string[];
    merkleTree: MerkleTree;
    leaf: Buffer;
    root: string;
    courseId: BigNumber;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}
