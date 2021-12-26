import { expect } from "chai";

export function shouldBehaveLikeCourse(): void {
  it("should return course cid", async function () {
    expect(await this.course.getCourseCID()).to.equal("ipfs://coursecid");
  });
}
