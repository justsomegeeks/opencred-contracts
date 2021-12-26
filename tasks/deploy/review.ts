import { task } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { Review } from "../../src/types/Review";
import { Review__factory } from "../../src/types/factories/Review__factory";

task("deploy:Review").setAction(async function (taskArguments: TaskArguments, { ethers }) {
  const reviewFactory: Review__factory = <Review__factory>await ethers.getContractFactory("Review");
  const reviewContract: Review = <Review>await reviewFactory.deploy();
  await reviewContract.deployed();
  console.log("Review deployed to: ", reviewContract.address);
});
