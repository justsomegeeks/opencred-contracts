import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { Course } from "../../src/types/Course";
import { Course__factory } from "../../src/types/factories/Course__factory";

task("deploy:Course").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const courseFactory: Course__factory = <Course__factory>await ethers.getContractFactory("Course");
  const courseContract: Course = <Course>await courseFactory.deploy();
  await courseContract.deployed();
  //   await courseContract.initialize("coursecid", (await ethers.getSigners())[0].address);
  console.log("Course Implementation deployed to: ", courseContract.address);
});
