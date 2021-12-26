import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { Bootcamp } from "../../src/types/Bootcamp";
import { Bootcamp__factory } from "../../src/types/factories/Bootcamp__factory";

task("deploy:Bootcamp")
  .addParam("courseaddr", "implementation address of course")
  .addParam("cid", "Content identifier of bootcamp")
  .setAction(async function (taskArguments: TaskArguments, { ethers }) {
    const bootcampFactory: Bootcamp__factory = <Bootcamp__factory>await ethers.getContractFactory("Bootcamp");
    const bootcampContract: Bootcamp = <Bootcamp>(
      await bootcampFactory.deploy(taskArguments.courseaddr, taskArguments.cid)
    );
    await bootcampContract.deployed();
    console.log("Bootcamp deployed to: ", bootcampContract.address);
  });
