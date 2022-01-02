import { expect } from "chai";
export function shouldBehaveLikeOpenCredCloneFactory(): void {
  console.log(expect);
  it("should deploy a new opencred contract with right owner", async function () {
    const tx = await this.opencredFactory.createBootcamp(this.signers.admin.address, "ipfs://bootcampuri");
    const reciept = await tx.wait();
    console.log("       +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("       Gas Cost without cloning");
    console.log(`       ${reciept.gasUsed.toNumber()}`);
    console.log("       +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  });
  it("should deploy new cloned contract", async function () {
    const tx = await this.opencredFactory.cloneBootcamp(this.signers.admin.address, "ipfs://bootcampuri");
    const reciept = await tx.wait();
    console.log("       +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("       Gas Cost when cloning");
    console.log(`       ${reciept.gasUsed.toNumber()}`);
    console.log("       +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  });
}
