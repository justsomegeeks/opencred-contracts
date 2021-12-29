/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OpenCred, OpenCredInterface } from "../OpenCred";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_bootcampURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bootcamp",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "bootcampURI",
        type: "string",
      },
    ],
    name: "BootcampCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bootcamp",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "courseURI",
        type: "string",
      },
    ],
    name: "CourseCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bootcamp",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "merkleProof",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "graduatesURI",
        type: "string",
      },
    ],
    name: "Graduate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bootcamp",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reviewer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reviewURI",
        type: "string",
      },
    ],
    name: "Review",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "courseURI",
        type: "string",
      },
    ],
    name: "addCourse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bootcampURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "courseCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "graduatesURI",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
    ],
    name: "graduate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "graduations",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
    ],
    name: "isCertified",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "courseId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "reviewURI",
        type: "string",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
    ],
    name: "review",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000f4538038062000f458339810160408190526200003491620001ac565b6200003f33620000a0565b805162000054906001906020840190620000f0565b50306001600160a01b03167fbecf93a7fdfd3337c97039b4dc2fe9efed420e6a0a4c1d46e9677ffa818ecf3f6001604051620000919190620002c5565b60405180910390a25062000375565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620000fe9062000288565b90600052602060002090601f0160209004810192826200012257600085556200016d565b82601f106200013d57805160ff19168380011785556200016d565b828001600101855582156200016d579182015b828111156200016d57825182559160200191906001019062000150565b506200017b9291506200017f565b5090565b5b808211156200017b576000815560010162000180565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215620001c057600080fd5b82516001600160401b0380821115620001d857600080fd5b818501915085601f830112620001ed57600080fd5b81518181111562000202576200020262000196565b604051601f8201601f19908116603f011681019083821181831017156200022d576200022d62000196565b8160405282815288868487010111156200024657600080fd5b600093505b828410156200026a57848401860151818501870152928501926200024b565b828411156200027c5760008684830101525b98975050505050505050565b600181811c908216806200029d57607f821691505b60208210811415620002bf57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208083526000845481600182811c915080831680620002e857607f831692505b8583108114156200030757634e487b7160e01b85526022600452602485fd5b878601838152602001818015620003275760018114620003395762000366565b60ff1986168252878201965062000366565b60008b81526020902060005b86811015620003605781548482015290850190890162000345565b83019750505b50949998505050505050505050565b610bc080620003856000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80638da5cb5b11610076578063eab571961161005b578063eab5719614610156578063f2fde38b14610194578063ff62b684146101a757600080fd5b80638da5cb5b14610128578063ce7be1121461014357600080fd5b806366055159116100a757806366055159146100f6578063715018a61461010d5780637fa142a31461011557600080fd5b80632e554076146100c357806349d5f2ae146100d8575b600080fd5b6100d66100d136600461085e565b6101ba565b005b6100e0610262565b6040516100ed91906108e8565b60405180910390f35b6100ff60035481565b6040519081526020016100ed565b6100d66102f0565b6100d6610123366004610902565b610356565b6000546040516001600160a01b0390911681526020016100ed565b6100d6610151366004610950565b610417565b6101846101643660046109f6565b600260209081526000928352604080842090915290825290205460ff1681565b60405190151581526020016100ed565b6100d66101a2366004610a18565b61051e565b6101846101b5366004610a41565b610600565b6000546001600160a01b031633146102195760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600380546001019081905560405130917fdfff37b93a59c1210da07fb62043e90ad88a7c2d1d12d53f1632950dfbbcf5b79161025791908590610b01565b60405180910390a250565b6001805461026f90610b1a565b80601f016020809104026020016040519081016040528092919081815260200182805461029b90610b1a565b80156102e85780601f106102bd576101008083540402835291602001916102e8565b820191906000526020600020905b8154815290600101906020018083116102cb57829003601f168201915b505050505081565b6000546001600160a01b0316331461034a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610210565b610354600061067d565b565b6000546001600160a01b031633146103b05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610210565b600081815260026020908152604080832085845290915290819020805460ff191660011790555130907fe8ccf14e0e5d0933c4a730f93f14ee872a8746633ce826da79b002094ce8c7649061040a90849086908890610b55565b60405180910390a2505050565b61048f85848480806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506040516bffffffffffffffffffffffff193360601b16602082015260340191506104739050565b6040516020818303038152906040528051906020012084610600565b6104db5760405162461bcd60e51b815260206004820152600d60248201527f4e6f7420436572746966696564000000000000000000000000000000000000006044820152606401610210565b604051339030907fd04dc1dba643da3b5fb0fa71c4117eb2fce28d2a32f523b0816c75ba0aaa86399061050f9088906108e8565b60405180910390a35050505050565b6000546001600160a01b031633146105785760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610210565b6001600160a01b0381166105f45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610210565b6105fd8161067d565b50565b600084815260026020908152604080832084845290915281205460ff166106695760405162461bcd60e51b815260206004820152600e60248201527f526f6f74206e6f7420666f756e640000000000000000000000000000000000006044820152606401610210565b6106748483856106e5565b95945050505050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000826106f285846106fb565b14949350505050565b600081815b845181101561079f57600085828151811061071d5761071d610b74565b6020026020010151905080831161075f57604080516020810185905290810182905260600160405160208183030381529060405280519060200120925061078c565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b508061079781610b8a565b915050610700565b509392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156107e6576107e66107a7565b604052919050565b600082601f8301126107ff57600080fd5b813567ffffffffffffffff811115610819576108196107a7565b61082c601f8201601f19166020016107bd565b81815284602083860101111561084157600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561087057600080fd5b813567ffffffffffffffff81111561088757600080fd5b610893848285016107ee565b949350505050565b6000815180845260005b818110156108c1576020818501810151868301820152016108a5565b818111156108d3576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006108fb602083018461089b565b9392505050565b60008060006060848603121561091757600080fd5b833567ffffffffffffffff81111561092e57600080fd5b61093a868287016107ee565b9660208601359650604090950135949350505050565b60008060008060006080868803121561096857600080fd5b85359450602086013567ffffffffffffffff8082111561098757600080fd5b61099389838a016107ee565b955060408801359150808211156109a957600080fd5b818801915088601f8301126109bd57600080fd5b8135818111156109cc57600080fd5b8960208260051b85010111156109e157600080fd5b96999598505060200195606001359392505050565b60008060408385031215610a0957600080fd5b50508035926020909101359150565b600060208284031215610a2a57600080fd5b81356001600160a01b03811681146108fb57600080fd5b60008060008060808587031215610a5757600080fd5b8435935060208086013567ffffffffffffffff80821115610a7757600080fd5b818801915088601f830112610a8b57600080fd5b813581811115610a9d57610a9d6107a7565b8060051b9150610aae8483016107bd565b818152918301840191848101908b841115610ac857600080fd5b938501935b83851015610ae657843582529385019390850190610acd565b989b989a505050506040870135966060013595945050505050565b828152604060208201526000610893604083018461089b565b600181811c90821680610b2e57607f821691505b60208210811415610b4f57634e487b7160e01b600052602260045260246000fd5b50919050565b838152826020820152606060408201526000610674606083018461089b565b634e487b7160e01b600052603260045260246000fd5b6000600019821415610bac57634e487b7160e01b600052601160045260246000fd5b506001019056fea164736f6c6343000809000a";

type OpenCredConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OpenCredConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OpenCred__factory extends ContractFactory {
  constructor(...args: OpenCredConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _bootcampURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OpenCred> {
    return super.deploy(_bootcampURI, overrides || {}) as Promise<OpenCred>;
  }
  getDeployTransaction(
    _bootcampURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_bootcampURI, overrides || {});
  }
  attach(address: string): OpenCred {
    return super.attach(address) as OpenCred;
  }
  connect(signer: Signer): OpenCred__factory {
    return super.connect(signer) as OpenCred__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OpenCredInterface {
    return new utils.Interface(_abi) as OpenCredInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OpenCred {
    return new Contract(address, _abi, signerOrProvider) as OpenCred;
  }
}