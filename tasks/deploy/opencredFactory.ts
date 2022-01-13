import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { OpenCredFactory } from "../../src/types/OpenCredFactory";
import { OpenCredFactory__factory } from "../../src/types/factories/OpenCredFactory__factory";

task("deploy:OpenCredFactory").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const opencredFactory: OpenCredFactory__factory = <OpenCredFactory__factory>(
    await ethers.getContractFactory("OpenCredFactory")
  );
  const deployer = (await ethers.getSigners())[0];
  const opencredContract: OpenCredFactory = <OpenCredFactory>await opencredFactory.deploy(deployer.address);
  await opencredContract.deployed();
  console.log("OpenCredFactory deployed to: ", opencredContract.address);
});
