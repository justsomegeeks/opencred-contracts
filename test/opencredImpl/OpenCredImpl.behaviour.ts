import { expect } from "chai";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

const OPENCRED_CONSTANTS = {
  bootcampURI: "ipfs://bootcampuri",
  courseURI: "ipfs://courseuri",
  graduatesURI: "ipfs://graduates",
  reviewURI: "ipfs://review",
};

export function shouldBehaveLikeOpenCredImpl(): void {
  // TODO: How to test emitted event from constructor?

  describe("Bootcamp", function () {
    it("should return correct bootcamp uri", async function () {
      expect(await this.opencredImpl.bootcampURI()).to.equal(OPENCRED_CONSTANTS.bootcampURI);
    });
    it("should return the right owner", async function () {
      expect(await this.opencredImpl.owner()).to.equal(this.signers.admin.address);
    });
  });

  describe("Course", function () {
    beforeEach(async function () {
      await this.opencredImpl.addCourse(OPENCRED_CONSTANTS.courseURI);
      this.courseId = await this.opencredImpl.courseCount();
      this.merkleTree = new MerkleTree(this.students, keccak256, { hashLeaves: true, sortPairs: true });
      this.leaf = keccak256(this.signers.certifiedStudent.address);
      this.root = this.merkleTree.getHexRoot();
    });
    it("should emit CourseCreated event with args", async function () {
      const courseCount = await this.opencredImpl.courseCount();
      await expect(this.opencredImpl.addCourse(OPENCRED_CONSTANTS.courseURI))
        .to.emit(this.opencredImpl, "CourseCreated")
        .withArgs(this.opencredImpl.address, courseCount.add(1), OPENCRED_CONSTANTS.courseURI);
    });

    it("should update course count", async function () {
      const courseCount = await this.opencredImpl.courseCount();
      await this.opencredImpl.addCourse(OPENCRED_CONSTANTS.courseURI);
      expect(await this.opencredImpl.courseCount()).to.equal(courseCount.add(1));
    });
    it("should graduate students", async function () {
      await expect(this.opencredImpl.graduate(OPENCRED_CONSTANTS.graduatesURI, this.root, this.courseId))
        .to.emit(this.opencredImpl, "Graduate")
        .withArgs(this.opencredImpl.address, this.courseId, this.root, OPENCRED_CONSTANTS.graduatesURI);
    });
    it("should return true if iscertified is called with valid leaf", async function () {
      await this.opencredImpl.graduate(OPENCRED_CONSTANTS.graduatesURI, this.root, this.courseId);
      expect(
        await this.opencredImpl.isCertified(
          this.courseId,
          this.merkleTree.getHexProof(this.leaf),
          this.leaf,
          this.root,
        ),
      ).to.be.true;
    });
    it("should return false if iscertified is called with invalid leaf", async function () {
      await this.opencredImpl.graduate(OPENCRED_CONSTANTS.graduatesURI, this.root, this.courseId);
      const invalidLeaf = keccak256(this.signers.admin.address);
      expect(
        await this.opencredImpl.isCertified(
          this.courseId,
          this.merkleTree.getHexProof(this.leaf),
          invalidLeaf,
          this.root,
        ),
      ).to.be.false;
    });
  });
  describe("Review", function () {
    beforeEach(async function () {
      await this.opencredImpl.addCourse(OPENCRED_CONSTANTS.courseURI);
      this.courseId = await this.opencredImpl.courseCount();
      this.merkleTree = new MerkleTree(this.students, keccak256, { hashLeaves: true, sortPairs: true });
      this.leaf = keccak256(this.signers.certifiedStudent.address);
      this.root = this.merkleTree.getHexRoot();
      await this.opencredImpl.graduate(OPENCRED_CONSTANTS.graduatesURI, this.root, this.courseId);
    });

    it("should fail if uncertified student tries to write a review", async function () {
      await expect(
        this.opencredImpl.review(
          this.courseId,
          OPENCRED_CONSTANTS.reviewURI,
          this.merkleTree.getHexProof(keccak256(this.signers.admin.address)),
          this.root,
        ),
      ).to.be.revertedWith("Not Certified");
    });
    it("should allow a certified student to write a review", async function () {
      await expect(
        this.opencredImpl
          .connect(this.signers.certifiedStudent)
          .review(this.courseId, OPENCRED_CONSTANTS.reviewURI, this.merkleTree.getHexProof(this.leaf), this.root),
      )
        .to.emit(this.opencredImpl, "Review")
        .withArgs(
          this.opencredImpl.address,
          this.signers.certifiedStudent.address,
          this.courseId,
          OPENCRED_CONSTANTS.reviewURI,
        );
    });
  });
}
