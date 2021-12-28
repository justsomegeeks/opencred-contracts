import "@nomiclabs/hardhat-ethers";
import { artifacts, ethers, waffle } from "hardhat";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import { Signers } from "../types";
import { shouldBehaveLikeOpenCred } from "./OpenCred.behaviour";
import { OpenCred } from "../../src/types/OpenCred";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.students = (await ethers.provider.listAccounts()).slice(1);
    this.signers.certifiedStudent = signers[5];
  });

  describe("OpenCred", function () {
    beforeEach(async function () {
      const opencredArtifact = await artifacts.readArtifact("OpenCred");
      this.opencred = <OpenCred>(
        await waffle.deployContract(this.signers.admin, opencredArtifact, ["ipfs://bootcampuri"])
      );
    });

    shouldBehaveLikeOpenCred();
  });
});
