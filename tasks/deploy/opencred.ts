import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { OpenCred } from "../../src/types/OpenCred";
import { OpenCred__factory } from "../../src/types/factories/OpenCred__factory";

task("deploy:OpenCred")
  .addParam("uri", "URI of a bootcamp")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const opencredFactory: OpenCred__factory = <OpenCred__factory>await ethers.getContractFactory("OpenCred");
    const deployer = (await ethers.getSigners())[0];
    const opencredContract: OpenCred = <OpenCred>await opencredFactory.deploy(taskArguments.uri, deployer.address);
    await opencredContract.deployed();
    console.log("OpenCred deployed to: ", opencredContract.address);
  });
