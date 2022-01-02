import "@nomiclabs/hardhat-ethers";
import { artifacts, ethers, waffle } from "hardhat";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import { Signers } from "../types";
import { shouldBehaveLikeOpenCredImpl } from "./OpenCredImpl.behaviour";
import { OpenCredImpl } from "../../src/types/OpenCredImpl";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.students = (await ethers.provider.listAccounts()).slice(1);
    this.signers.certifiedStudent = signers[5];
  });

  describe("OpenCredImpl", function () {
    beforeEach(async function () {
      const opencredImplArtifact = await artifacts.readArtifact("OpenCredImpl");
      this.opencredImpl = <OpenCredImpl>await waffle.deployContract(this.signers.admin, opencredImplArtifact, []);
      await this.opencredImpl.initialize(this.signers.admin.address, "ipfs://bootcampuri");
    });

    shouldBehaveLikeOpenCredImpl();
  });
});
