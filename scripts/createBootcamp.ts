import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { OpenCredFactory } from "../src/types/OpenCredFactory";

const opencredFactoryAddress = "0xd86EB75611a6155687a2c9C9E7a876495654718B";

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
    await cloneBootcamp.wait();
    await sleep(4000);
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
