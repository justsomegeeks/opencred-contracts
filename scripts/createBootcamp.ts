import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { OpenCredFactory } from "../src/types/OpenCredFactory";

// hardhat node first contract creation address  = 0xE3C6158a2F04f08F39f99FAC450AC91aF5b5D7DD
const opencredFactoryAddress = "0xE3C6158a2F04f08F39f99FAC450AC91aF5b5D7DD";

async function main() {
  const deployer = (await ethers.getSigners())[2];

  const opencredFactoryContract: OpenCredFactory = <OpenCredFactory>(
    await ethers.getContractAt("OpenCredFactory", opencredFactoryAddress, deployer)
  );
  for (let i = 0; i < 5; i++) {
    const cloneBootcamp = await opencredFactoryContract.cloneBootcamp(
      deployer.address,
      `QmXFb3YhKzL7JF29JwcNUcdwpuKwtgeRQ3N1SeM5LNpRJd`,
    );
    const reciept = await cloneBootcamp.wait();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    console.log(reciept.events?.[1].args);

    // When calling createBootcamp instead of cloneBootcamp console log index 2 event
    // console.log(reciept.events?.[2].args);
    await sleep(2000);
  }
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
