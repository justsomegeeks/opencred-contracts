import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { OpenCredFactory } from "../../src/types/OpenCredFactory";
import { OpenCredFactory__factory } from "../../src/types/factories/OpenCredFactory__factory";
import { OpenCredImpl__factory } from "../../src/types/factories/OpenCredImpl__factory";
import { OpenCredImpl } from "../../src/types/OpenCredImpl";

task("deploy:OpenCredFactory").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const opencredFactory: OpenCredFactory__factory = <OpenCredFactory__factory>(
    await ethers.getContractFactory("OpenCredFactory")
  );
  const deployer = (await ethers.getSigners())[0];
  const opencredFactoryContract: OpenCredFactory = <OpenCredFactory>await opencredFactory.deploy(deployer.address);
  await opencredFactoryContract.deployed();
  console.log("OpenCredFactory deployed to: ", opencredFactoryContract.address);
  // Todo: set implementation address
  const opencredImplFactory: OpenCredImpl__factory = <OpenCredImpl__factory>(
    await ethers.getContractFactory("OpenCredImpl")
  );
  const opencredImplContract: OpenCredImpl = <OpenCredImpl>await opencredImplFactory.deploy();

  await opencredFactoryContract.setImplementationAddress(opencredImplContract.address);
});
