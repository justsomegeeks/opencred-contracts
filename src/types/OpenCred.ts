/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface OpenCredInterface extends utils.Interface {
  functions: {
    "addCourse(string)": FunctionFragment;
    "bootcampURI()": FunctionFragment;
    "courseCount()": FunctionFragment;
    "graduate(string,bytes32,uint256)": FunctionFragment;
    "graduations(uint256,bytes32)": FunctionFragment;
    "isCertified(uint256,bytes32[],bytes32,bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "review(uint256,string,bytes32[],bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addCourse", values: [string]): string;
  encodeFunctionData(
    functionFragment: "bootcampURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "courseCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "graduate",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "graduations",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isCertified",
    values: [BigNumberish, BytesLike[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "review",
    values: [BigNumberish, string, BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addCourse", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bootcampURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "courseCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "graduate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "graduations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCertified",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "review", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "BootcampCreated(address,address,string)": EventFragment;
    "CourseCreated(address,uint256,string)": EventFragment;
    "Graduate(address,uint256,bytes32,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Review(address,address,uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BootcampCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CourseCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Graduate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Review"): EventFragment;
}

export type BootcampCreatedEvent = TypedEvent<
  [string, string, string],
  { owner: string; bootcamp: string; bootcampURI: string }
>;

export type BootcampCreatedEventFilter = TypedEventFilter<BootcampCreatedEvent>;

export type CourseCreatedEvent = TypedEvent<
  [string, BigNumber, string],
  { bootcamp: string; courseId: BigNumber; courseURI: string }
>;

export type CourseCreatedEventFilter = TypedEventFilter<CourseCreatedEvent>;

export type GraduateEvent = TypedEvent<
  [string, BigNumber, string, string],
  {
    bootcamp: string;
    courseId: BigNumber;
    merkleProof: string;
    graduatesURI: string;
  }
>;

export type GraduateEventFilter = TypedEventFilter<GraduateEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type ReviewEvent = TypedEvent<
  [string, string, BigNumber, string],
  { bootcamp: string; reviewer: string; courseId: BigNumber; reviewURI: string }
>;

export type ReviewEventFilter = TypedEventFilter<ReviewEvent>;

export interface OpenCred extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OpenCredInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addCourse(
      courseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bootcampURI(overrides?: CallOverrides): Promise<[string]>;

    courseCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    graduate(
      graduatesURI: string,
      root: BytesLike,
      courseId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    graduations(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isCertified(
      courseId: BigNumberish,
      proof: BytesLike[],
      leaf: BytesLike,
      root: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    review(
      courseId: BigNumberish,
      reviewURI: string,
      proof: BytesLike[],
      root: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addCourse(
    courseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bootcampURI(overrides?: CallOverrides): Promise<string>;

  courseCount(overrides?: CallOverrides): Promise<BigNumber>;

  graduate(
    graduatesURI: string,
    root: BytesLike,
    courseId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  graduations(
    arg0: BigNumberish,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isCertified(
    courseId: BigNumberish,
    proof: BytesLike[],
    leaf: BytesLike,
    root: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  review(
    courseId: BigNumberish,
    reviewURI: string,
    proof: BytesLike[],
    root: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addCourse(courseURI: string, overrides?: CallOverrides): Promise<void>;

    bootcampURI(overrides?: CallOverrides): Promise<string>;

    courseCount(overrides?: CallOverrides): Promise<BigNumber>;

    graduate(
      graduatesURI: string,
      root: BytesLike,
      courseId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    graduations(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isCertified(
      courseId: BigNumberish,
      proof: BytesLike[],
      leaf: BytesLike,
      root: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    review(
      courseId: BigNumberish,
      reviewURI: string,
      proof: BytesLike[],
      root: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BootcampCreated(address,address,string)"(
      owner?: string | null,
      bootcamp?: string | null,
      bootcampURI?: null
    ): BootcampCreatedEventFilter;
    BootcampCreated(
      owner?: string | null,
      bootcamp?: string | null,
      bootcampURI?: null
    ): BootcampCreatedEventFilter;

    "CourseCreated(address,uint256,string)"(
      bootcamp?: string | null,
      courseId?: BigNumberish | null,
      courseURI?: null
    ): CourseCreatedEventFilter;
    CourseCreated(
      bootcamp?: string | null,
      courseId?: BigNumberish | null,
      courseURI?: null
    ): CourseCreatedEventFilter;

    "Graduate(address,uint256,bytes32,string)"(
      bootcamp?: string | null,
      courseId?: BigNumberish | null,
      merkleProof?: null,
      graduatesURI?: null
    ): GraduateEventFilter;
    Graduate(
      bootcamp?: string | null,
      courseId?: BigNumberish | null,
      merkleProof?: null,
      graduatesURI?: null
    ): GraduateEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Review(address,address,uint256,string)"(
      bootcamp?: string | null,
      reviewer?: string | null,
      courseId?: BigNumberish | null,
      reviewURI?: null
    ): ReviewEventFilter;
    Review(
      bootcamp?: string | null,
      reviewer?: string | null,
      courseId?: BigNumberish | null,
      reviewURI?: null
    ): ReviewEventFilter;
  };

  estimateGas: {
    addCourse(
      courseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bootcampURI(overrides?: CallOverrides): Promise<BigNumber>;

    courseCount(overrides?: CallOverrides): Promise<BigNumber>;

    graduate(
      graduatesURI: string,
      root: BytesLike,
      courseId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    graduations(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCertified(
      courseId: BigNumberish,
      proof: BytesLike[],
      leaf: BytesLike,
      root: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    review(
      courseId: BigNumberish,
      reviewURI: string,
      proof: BytesLike[],
      root: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addCourse(
      courseURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bootcampURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    courseCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    graduate(
      graduatesURI: string,
      root: BytesLike,
      courseId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    graduations(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCertified(
      courseId: BigNumberish,
      proof: BytesLike[],
      leaf: BytesLike,
      root: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    review(
      courseId: BigNumberish,
      reviewURI: string,
      proof: BytesLike[],
      root: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
