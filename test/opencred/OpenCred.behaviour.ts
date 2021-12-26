import { expect } from "chai";

export const OPENCRED_CONSTANTS = {
  bootcampURI: "ipfs://bootcampuri",
  courseURI: "ipfs://courseuri",
};

export function shouldBehaveLikeOpenCred(): void {
  it("should return correct uri", async function () {
    expect(await this.opencred.bootcampURI()).to.equal(OPENCRED_CONSTANTS.bootcampURI);
    const courseCount = await this.opencred.courseCount();
    await expect(this.opencred.addCourse(OPENCRED_CONSTANTS.courseURI))
      .to.emit(this.opencred, "CourseCreated")
      .withArgs(this.opencred.address, courseCount.add(1), OPENCRED_CONSTANTS.courseURI);
  });
}
