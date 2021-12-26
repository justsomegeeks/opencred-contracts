import { expect } from "chai";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

export const OPENCRED_CONSTANTS = {
  bootcampURI: "ipfs://bootcampuri",
  courseURI: "ipfs://courseuri",
  graduatesURI: "ipfs://graduates",
};

export function shouldBehaveLikeOpenCred(): void {
  // TODO: How to test emitted event from constructor?

  it("should return correct uri", async function () {
    expect(await this.opencred.bootcampURI()).to.equal(OPENCRED_CONSTANTS.bootcampURI);
  });

  describe("Course", function () {
    beforeEach(async function () {
      await this.opencred.addCourse(OPENCRED_CONSTANTS.courseURI);
      this.courseId = await this.opencred.courseCount();
      this.merkleTree = new MerkleTree(this.students, keccak256, { hashLeaves: true, sortPairs: true });
      this.leaf = keccak256(this.students[4]);
      this.root = this.merkleTree.getHexRoot();
    });
    it("should emit CourseCreated event with args", async function () {
      const courseCount = await this.opencred.courseCount();
      await expect(this.opencred.addCourse(OPENCRED_CONSTANTS.courseURI))
        .to.emit(this.opencred, "CourseCreated")
        .withArgs(this.opencred.address, courseCount.add(1), OPENCRED_CONSTANTS.courseURI);
    });

    it("should update course count", async function () {
      const courseCount = await this.opencred.courseCount();
      await this.opencred.addCourse(OPENCRED_CONSTANTS.courseURI);
      expect(await this.opencred.courseCount()).to.equal(courseCount.add(1));
    });
    it("should graduate students", async function () {
      await expect(this.opencred.graduate(OPENCRED_CONSTANTS.graduatesURI, this.root, this.courseId))
        .to.emit(this.opencred, "Graduate")
        .withArgs(this.opencred.address, this.courseId, this.root, OPENCRED_CONSTANTS.graduatesURI);
    });
    it("should return true if iscertified is called with valid leaf", async function () {
      await this.opencred.graduate(OPENCRED_CONSTANTS.graduatesURI, this.root, this.courseId);
      expect(
        await this.opencred.isCertified(this.courseId, this.merkleTree.getHexProof(this.leaf), this.leaf, this.root),
      ).to.be.true;
    });
    it("should return false if iscertified is called with invalid leaf", async function () {
      await this.opencred.graduate(OPENCRED_CONSTANTS.graduatesURI, this.root, this.courseId);
      const invalidLeaf = keccak256(this.signers.admin.address);
      expect(
        await this.opencred.isCertified(this.courseId, this.merkleTree.getHexProof(this.leaf), invalidLeaf, this.root),
      ).to.be.false;
    });
  });
}
