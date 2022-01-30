/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  OpenCredFactory,
  OpenCredFactoryInterface,
} from "../OpenCredFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
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
        name: "owner",
        type: "address",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_bootcampURI",
        type: "string",
      },
    ],
    name: "cloneBootcamp",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_bootcampURI",
        type: "string",
      },
    ],
    name: "createBootcamp",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "opencredImpl",
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
        internalType: "address",
        name: "_opencredImpl",
        type: "address",
      },
    ],
    name: "setImplementationAddress",
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
  "0x608060405234801561001057600080fd5b506040516117d33803806117d383398101604081905261002f91610097565b61003833610047565b61004181610047565b506100c7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100a957600080fd5b81516001600160a01b03811681146100c057600080fd5b9392505050565b6116fd806100d66000396000f3fe60806040523480156200001157600080fd5b5060043610620000875760003560e01c8063a8faf7001162000062578063a8faf70014620000dd578063d81e0df614620000f4578063ecade2f01462000108578063f2fde38b146200011f57600080fd5b80633a3e3ce9146200008c578063715018a614620000bf5780638da5cb5b14620000cb575b600080fd5b620000a36200009d366004620005d8565b62000136565b6040516001600160a01b03909116815260200160405180910390f35b620000c96200020d565b005b6000546001600160a01b0316620000a3565b620000a3620000ee366004620005d8565b6200027b565b600154620000a3906001600160a01b031681565b620000c962000119366004620005b3565b62000300565b620000c962000130366004620005b3565b6200038b565b600154600090819062000152906001600160a01b031662000473565b6040516379ccf11760e11b81529091506001600160a01b0382169063f399e22e90620001859087908790600401620006f6565b600060405180830381600087803b158015620001a057600080fd5b505af1158015620001b5573d6000803e3d6000fd5b50505050806001600160a01b0316846001600160a01b03167fb227d22ddfde67fb85594bdda4f269a7cb78da55a69aa42451e2d4cbd15a3da785604051620001fe919062000722565b60405180910390a39392505050565b6000546001600160a01b031633146200026d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b62000279600062000530565b565b60008082846040516200028e906200058d565b6200029b92919062000737565b604051809103906000f080158015620002b8573d6000803e3d6000fd5b509050806001600160a01b0316846001600160a01b03167fb227d22ddfde67fb85594bdda4f269a7cb78da55a69aa42451e2d4cbd15a3da785604051620001fe919062000722565b6000546001600160a01b031633146200035c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000264565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b03163314620003e75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000264565b6001600160a01b038116620004655760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840162000264565b620004708162000530565b50565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f09150506001600160a01b0381166200052b5760405162461bcd60e51b815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015260640162000264565b919050565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610f76806200077b83390190565b80356001600160a01b03811681146200052b57600080fd5b600060208284031215620005c657600080fd5b620005d1826200059b565b9392505050565b60008060408385031215620005ec57600080fd5b620005f7836200059b565b9150602083013567ffffffffffffffff808211156200061557600080fd5b818501915085601f8301126200062a57600080fd5b8135818111156200063f576200063f62000764565b604051601f8201601f19908116603f011681019083821181831017156200066a576200066a62000764565b816040528281528860208487010111156200068457600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000815180845260005b81811015620006ce57602081850181015186830182015201620006b0565b81811115620006e1576000602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b03831681526040602082015260006200071a6040830184620006a6565b949350505050565b602081526000620005d16020830184620006a6565b6040815260006200074c6040830185620006a6565b90506001600160a01b03831660208301529392505050565b634e487b7160e01b600052604160045260246000fdfe60806040523480156200001157600080fd5b5060405162000f7638038062000f768339810160408190526200003491620001c9565b6200003f33620000b6565b81516200005490600190602085019062000106565b506200006081620000b6565b306001600160a01b0316816001600160a01b03167fb227d22ddfde67fb85594bdda4f269a7cb78da55a69aa42451e2d4cbd15a3da76001604051620000a69190620002ba565b60405180910390a35050620003bd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b82805462000114906200036a565b90600052602060002090601f01602090048101928262000138576000855562000183565b82601f106200015357805160ff191683800117855562000183565b8280016001018555821562000183579182015b828111156200018357825182559160200191906001019062000166565b506200019192915062000195565b5090565b5b8082111562000191576000815560010162000196565b80516001600160a01b0381168114620001c457600080fd5b919050565b60008060408385031215620001dd57600080fd5b82516001600160401b0380821115620001f557600080fd5b818501915085601f8301126200020a57600080fd5b8151818111156200021f576200021f620003a7565b604051601f8201601f19908116603f011681019083821181831017156200024a576200024a620003a7565b816040528281526020935088848487010111156200026757600080fd5b600091505b828210156200028b57848201840151818301850152908301906200026c565b828211156200029d5760008484830101525b9550620002af915050858201620001ac565b925050509250929050565b600060208083526000845481600182811c915080831680620002dd57607f831692505b858310811415620002fc57634e487b7160e01b85526022600452602485fd5b8786018381526020018180156200031c57600181146200032e576200035b565b60ff198616825287820196506200035b565b60008b81526020902060005b8681101562000355578154848201529085019089016200033a565b83019750505b50949998505050505050505050565b600181811c908216806200037f57607f821691505b60208210811415620003a157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610ba980620003cd6000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80638da5cb5b11610076578063eab571961161005b578063eab5719614610156578063f2fde38b14610194578063ff62b684146101a757600080fd5b80638da5cb5b14610128578063ce7be1121461014357600080fd5b806366055159116100a757806366055159146100f6578063715018a61461010d5780637fa142a31461011557600080fd5b80632e554076146100c357806349d5f2ae146100d8575b600080fd5b6100d66100d1366004610848565b6101ba565b005b6100e061025f565b6040516100ed9190610ac8565b60405180910390f35b6100ff60035481565b6040519081526020016100ed565b6100d66102ed565b6100d6610123366004610885565b610353565b6000546040516001600160a01b0390911681526020016100ed565b6100d66101513660046109bc565b610412565b61018461016436600461099a565b600260209081526000928352604080842090915290825290205460ff1681565b60405190151581526020016100ed565b6100d66101a2366004610818565b61051f565b6101846101b53660046108d3565b610601565b6000546001600160a01b031633146102195760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60038054600101908190556040517fc2c844c5f6c72fe99b99de0942ba619e99957d3e8f7e614263ecfe40de952e5890610254908490610ac8565b60405180910390a250565b6001805461026c90610b0c565b80601f016020809104026020016040519081016040528092919081815260200182805461029890610b0c565b80156102e55780601f106102ba576101008083540402835291602001916102e5565b820191906000526020600020905b8154815290600101906020018083116102c857829003601f168201915b505050505081565b6000546001600160a01b031633146103475760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610210565b610351600061067e565b565b6000546001600160a01b031633146103ad5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610210565b600081815260026020908152604080832085845290915290819020805460ff191660011790555181907fc72580170f3ff1c43b3cdc40a05383dab389841af2555d21950151fecb83b626906104059085908790610aaf565b60405180910390a2505050565b61048a85848480806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506040516bffffffffffffffffffffffff193360601b166020820152603401915061046e9050565b6040516020818303038152906040528051906020012084610601565b6104d65760405162461bcd60e51b815260206004820152600d60248201527f4e6f7420436572746966696564000000000000000000000000000000000000006044820152606401610210565b84336001600160a01b03167f984431b6157d38eb9ba10ee456157dc48b546e19cae0c989326a4e6772f8a05d866040516105109190610ac8565b60405180910390a35050505050565b6000546001600160a01b031633146105795760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610210565b6001600160a01b0381166105f55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610210565b6105fe8161067e565b50565b600084815260026020908152604080832084845290915281205460ff1661066a5760405162461bcd60e51b815260206004820152600e60248201527f526f6f74206e6f7420666f756e640000000000000000000000000000000000006044820152606401610210565b6106758483856106e6565b95945050505050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000826106f385846106fc565b14949350505050565b600081815b84518110156107a057600085828151811061071e5761071e610b70565b6020026020010151905080831161076057604080516020810185905290810182905260600160405160208183030381529060405280519060200120925061078d565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b508061079881610b47565b915050610701565b509392505050565b600082601f8301126107b957600080fd5b813567ffffffffffffffff8111156107d3576107d3610b86565b6107e6601f8201601f1916602001610adb565b8181528460208386010111156107fb57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561082a57600080fd5b81356001600160a01b038116811461084157600080fd5b9392505050565b60006020828403121561085a57600080fd5b813567ffffffffffffffff81111561087157600080fd5b61087d848285016107a8565b949350505050565b60008060006060848603121561089a57600080fd5b833567ffffffffffffffff8111156108b157600080fd5b6108bd868287016107a8565b9660208601359650604090950135949350505050565b600080600080608085870312156108e957600080fd5b8435935060208086013567ffffffffffffffff8082111561090957600080fd5b818801915088601f83011261091d57600080fd5b81358181111561092f5761092f610b86565b8060051b9150610940848301610adb565b8181528481019084860184860187018d101561095b57600080fd5b600095505b8386101561097e578035835260019590950194918601918601610960565b50989b989a505050506040870135966060013595945050505050565b600080604083850312156109ad57600080fd5b50508035926020909101359150565b6000806000806000608086880312156109d457600080fd5b85359450602086013567ffffffffffffffff808211156109f357600080fd5b6109ff89838a016107a8565b95506040880135915080821115610a1557600080fd5b818801915088601f830112610a2957600080fd5b813581811115610a3857600080fd5b8960208260051b8501011115610a4d57600080fd5b96999598505060200195606001359392505050565b6000815180845260005b81811015610a8857602081850181015186830182015201610a6c565b81811115610a9a576000602083870101525b50601f01601f19169290920160200192915050565b82815260406020820152600061087d6040830184610a62565b6020815260006108416020830184610a62565b604051601f8201601f1916810167ffffffffffffffff81118282101715610b0457610b04610b86565b604052919050565b600181811c90821680610b2057607f821691505b60208210811415610b4157634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415610b6957634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000807000aa164736f6c6343000807000a";

type OpenCredFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OpenCredFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OpenCredFactory__factory extends ContractFactory {
  constructor(...args: OpenCredFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OpenCredFactory> {
    return super.deploy(_owner, overrides || {}) as Promise<OpenCredFactory>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): OpenCredFactory {
    return super.attach(address) as OpenCredFactory;
  }
  connect(signer: Signer): OpenCredFactory__factory {
    return super.connect(signer) as OpenCredFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OpenCredFactoryInterface {
    return new utils.Interface(_abi) as OpenCredFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OpenCredFactory {
    return new Contract(address, _abi, signerOrProvider) as OpenCredFactory;
  }
}
