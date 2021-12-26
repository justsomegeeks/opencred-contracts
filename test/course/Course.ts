import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import { Signers } from "../types";
import { shouldBehaveLikeCourse } from "./Course.behavior";
import { Course } from "../../src/types/Course";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
  });

  describe("Course", function () {
    beforeEach(async function () {
      const courseArtifact: Artifact = await artifacts.readArtifact("Course");
      this.course = <Course>await waffle.deployContract(this.signers.admin, courseArtifact, []);
      await this.course.initialize("ipfs://coursecid", this.signers.admin.address);
    });

    shouldBehaveLikeCourse();
  });
});
