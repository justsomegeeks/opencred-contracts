import "@nomiclabs/hardhat-ethers";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import { Signers } from "../types";
import { shouldBehaveLikeOpenCred } from "./OpenCred.behaviour";
import { OpenCred } from "../../src/types/OpenCred";

export const OPENCRED_CONSTANTS = {
  bootcampURI: "ipfs://bootcampuri",
  courseURI: "ipfs://courseuri",
};

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("OpenCred", function () {
    beforeEach(async function () {
      const opencredArtifact: Artifact = await artifacts.readArtifact("OpenCred");
      this.opencred = <OpenCred>(
        await waffle.deployContract(this.signers.admin, opencredArtifact, [OPENCRED_CONSTANTS.bootcampURI])
      );
    });

    shouldBehaveLikeOpenCred();
  });
});
