import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { OpenCredImpl } from "../../src/types/OpenCredImpl";
import { OpenCredImpl__factory } from "../../src/types/factories/OpenCredImpl__factory";

task("deploy:OpenCredImpl").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const opencredImplFactory: OpenCredImpl__factory = <OpenCredImpl__factory>(
    await ethers.getContractFactory("OpenCredImpl")
  );
  const opencredImplContract: OpenCredImpl = <OpenCredImpl>await opencredImplFactory.deploy();
  await opencredImplContract.deployed();
  console.log("OpenCredImpl deployed to: ", opencredImplContract.address);
});
