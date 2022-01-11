import "@nomiclabs/hardhat-ethers";
import { artifacts, ethers, waffle } from "hardhat";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import { Signers } from "../types";
import { shouldBehaveLikeOpenCredCloneFactory } from "./OpenCredFactory.behaviour";
import { OpenCredInitializable } from "../../src/types/OpenCredInitializable";
import { OpenCredFactory } from "../../src/types/OpenCredFactory";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;
    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("OpenCredFactory", function () {
    beforeEach(async function () {
      const opencredFactoryArtifcat = await artifacts.readArtifact("OpenCredFactory");
      const opencredImplArtifact = await artifacts.readArtifact("OpenCredImpl");
      this.opencredFactory = <OpenCredFactory>(
        await waffle.deployContract(this.signers.admin, opencredFactoryArtifcat, [this.signers.admin.address])
      );
      this.opencredInitializable = <OpenCredInitializable>(
        await waffle.deployContract(this.signers.admin, opencredImplArtifact, [])
      );
      await this.opencredFactory.setImplementationAddress(this.opencredInitializable.address);
    });

    shouldBehaveLikeOpenCredCloneFactory();
  });
});
