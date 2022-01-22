import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";
import { OpenCredImpl } from "../src/types/OpenCredImpl";

// first deployed address = 0x6e62c2f2aE9Cf0f74cDD38646837C71d4A62b1Ff
const openCredContractAddress = "0x6e62c2f2aE9Cf0f74cDD38646837C71d4A62b1Ff";

async function main() {
  const deployer = (await ethers.getSigners())[2];
  const opencredContract: OpenCredImpl = <OpenCredImpl>(
    await ethers.getContractAt("OpenCredImpl", openCredContractAddress, deployer)
  );
  const addCourse = await opencredContract.addCourse("http://courseuri");
  const reciept1 = await addCourse.wait();
  console.log(reciept1.events?.[0].event);
  console.log(reciept1.events?.[0].args);
  console.log("Created new course...");
  await sleep(2000);
  // TODO: Graduate
  const studentSigner = (await ethers.getSigners())[4];
  const students = (await ethers.provider.listAccounts()).slice(3);
  const courseId = ethers.BigNumber.from(1);
  const merkleTree = new MerkleTree(students, keccak256, { hashLeaves: true, sortPairs: true });
  const leaf = keccak256(studentSigner.address);
  const root = merkleTree.getHexRoot();
  const graduate = await opencredContract.graduate("http://graduatescid", root, courseId);
  const reciept2 = await graduate.wait();
  console.log(reciept2.events?.[0].event);
  console.log(reciept2.events?.[0].args);
  console.log("Graduated new batch");
  await sleep(2000);
  // TODO: Write a review
  const review = await opencredContract
    .connect(studentSigner)
    .review(courseId, "http://reviewuri", merkleTree.getHexProof(leaf), root);
  const reciept3 = await review.wait();
  console.log(reciept3.events?.[0].event);
  console.log(reciept3.events?.[0].args);
  console.log("New review recieved.");
  await sleep(2000);
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
