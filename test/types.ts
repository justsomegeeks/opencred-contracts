import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import type { Fixture } from "ethereum-waffle";

import type { Bootcamp } from "../src/types/Bootcamp";
import type { Course } from "../src/types/Course";
import { Greeter } from "../src/types/Greeter";
import { OpenCred } from "../src/types/OpenCred";
import type { Review } from "../src/types/Review";

declare module "mocha" {
  export interface Context {
    greeter: Greeter;
    course: Course;
    bootcamp: Bootcamp;
    review: Review;
    opencred: OpenCred;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
}
