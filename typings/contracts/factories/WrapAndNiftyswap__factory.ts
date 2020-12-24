/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WrapAndNiftyswap } from "../WrapAndNiftyswap";

export class WrapAndNiftyswap__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tokenWrapper: string,
    _exchange: string,
    _erc20: string,
    _erc1155: string,
    overrides?: Overrides
  ): Promise<WrapAndNiftyswap> {
    return super.deploy(
      _tokenWrapper,
      _exchange,
      _erc20,
      _erc1155,
      overrides || {}
    ) as Promise<WrapAndNiftyswap>;
  }
  getDeployTransaction(
    _tokenWrapper: string,
    _exchange: string,
    _erc20: string,
    _erc1155: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenWrapper,
      _exchange,
      _erc20,
      _erc1155,
      overrides || {}
    );
  }
  attach(address: string): WrapAndNiftyswap {
    return super.attach(address) as WrapAndNiftyswap;
  }
  connect(signer: Signer): WrapAndNiftyswap__factory {
    return super.connect(signer) as WrapAndNiftyswap__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrapAndNiftyswap {
    return new Contract(address, _abi, signerOrProvider) as WrapAndNiftyswap;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_tokenWrapper",
        type: "address",
      },
      {
        internalType: "address",
        name: "_exchange",
        type: "address",
      },
      {
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "_erc1155",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "erc1155",
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
    name: "erc20",
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
    name: "exchange",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_niftyswapOrder",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenWrapper",
    outputs: [
      {
        internalType: "contract IERC20Wrapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_niftyswapOrder",
        type: "bytes",
      },
    ],
    name: "wrapAndSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162001a8038038062001a808339810160408190526200003591620001ec565b6001600160a01b038416158015906200005657506001600160a01b03831615155b80156200006b57506001600160a01b03821615155b80156200008057506001600160a01b03811615155b620000a85760405162461bcd60e51b81526004016200009f90620002c2565b60405180910390fd5b6001600160601b0319606085811b821660805284811b821660a05283811b821660c05282901b1660e05260405163095ea7b360e01b81526001600160a01b0383169063095ea7b3906200010490879060001990600401620002a9565b602060405180830381600087803b1580156200011f57600080fd5b505af115801562000134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015a919062000253565b506040516318fe01c760e21b81526001600160a01b038516906363f8071c906200018990859060040162000295565b60206040518083038186803b158015620001a257600080fd5b505afa158015620001b7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001dd91906200027c565b61010052506200031292505050565b6000806000806080858703121562000202578384fd5b84516200020f81620002f9565b60208601519094506200022281620002f9565b60408601519093506200023581620002f9565b60608601519092506200024881620002f9565b939692955090935050565b60006020828403121562000265578081fd5b8151801515811462000275578182fd5b9392505050565b6000602082840312156200028e578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6020808252601c908201527f494e56414c494420434f4e5354525543544f5220415247554d454e5400000000604082015260600190565b6001600160a01b03811681146200030f57600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c610100516116c3620003bd6000398061040052806104f452806109bd52508061068452806107825280610c4952508061010252806101f352806102e952806105de5280610aa75280610b405250806103de52806108c35280610c255250806102bc52806103af52806104c552806105b1528061071c528061098e5280610a7a5280610c015280610c8552506116c36000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c5e3dfd81161005b578063c5e3dfd8146100d5578063d2f7265a146100dd578063d56022d7146100e5578063f23a6e61146100ed5761007d565b8063785e9e8614610082578063a874d5b6146100a0578063bc197c81146100b5575b600080fd5b61008a610100565b60405161009791906112e6565b60405180910390f35b6100b36100ae3660046111bf565b610124565b005b6100c86100c3366004610eee565b6106f7565b604051610097919061147a565b61008a610bff565b61008a610c23565b61008a610c47565b6100c86100fb366004610fa5565b610c6b565b7f000000000000000000000000000000000000000000000000000000000000000081565b61012c610d08565b61013882840184611042565b805190925073ffffffffffffffffffffffffffffffffffffffff16159050806101775750805173ffffffffffffffffffffffffffffffffffffffff1630145b6101b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ad9061160a565b60405180910390fd5b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906323b872dd9061022c90339030908a90600401611307565b602060405180830381600087803b15801561024657600080fd5b505af115801561025a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027e919061101b565b506040517f8340f54900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690638340f54990610315907f00000000000000000000000000000000000000000000000000000000000000009030908a90600401611307565b600060405180830381600087803b15801561032f57600080fd5b505af1158015610343573d6000803e3d6000fd5b5050600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905550506040517ff242432a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063f242432a9061042e9030907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000908b908a908a9060040161140e565b600060405180830381600087803b15801561044857600080fd5b505af115801561045c573d6000803e3d6000fd5b5050600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001681556040517efdd58e00000000000000000000000000000000000000000000000000000000815290925073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016915062fdd58e9061051c9030907f000000000000000000000000000000000000000000000000000000000000000090600401611454565b60206040518083038186803b15801561053457600080fd5b505afa158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c91906111a7565b9050801561063d576040517fd9caed1200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063d9caed129061060a907f00000000000000000000000000000000000000000000000000000000000000009089908690600401611307565b600060405180830381600087803b15801561062457600080fd5b505af1158015610638573d6000803e3d6000fd5b505050505b602082015160408084015190517f2eb2c2d600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692632eb2c2d6926106bd9230928b9290916004016113a9565b600060405180830381600087803b1580156106d757600080fd5b505af11580156106eb573d6000803e3d6000fd5b50505050505050505050565b6000805460ff168061073e57503373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016145b1561076a57507fbc197c8100000000000000000000000000000000000000000000000000000000610bf3565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146107d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ad90611587565b6107e1610d46565b6107ed8385018561110c565b805190925073ffffffffffffffffffffffffffffffffffffffff161590508061082c5750805173ffffffffffffffffffffffffffffffffffffffff1630145b610862576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ad906114a7565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556040517f2eb2c2d60000000000000000000000000000000000000000000000000000000081523390632eb2c2d6906108f79030907f0000000000000000000000000000000000000000000000000000000000000000908d908d908d908d908d908d90600401611338565b600060405180830381600087803b15801561091157600080fd5b505af1158015610925573d6000803e3d6000fd5b5050600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001681556040517efdd58e00000000000000000000000000000000000000000000000000000000815290925073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016915062fdd58e906109e59030907f000000000000000000000000000000000000000000000000000000000000000090600401611454565b60206040518083038186803b1580156109fd57600080fd5b505afa158015610a11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3591906111a7565b90508015610bcd576040517fd9caed1200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063d9caed1290610ad3907f00000000000000000000000000000000000000000000000000000000000000009030908690600401611307565b600060405180830381600087803b158015610aed57600080fd5b505af1158015610b01573d6000803e3d6000fd5b50506040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016925063a9059cbb9150610b79908d908590600401611454565b602060405180830381600087803b158015610b9357600080fd5b505af1158015610ba7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcb919061101b565b505b507fbc197c81000000000000000000000000000000000000000000000000000000009150505b98975050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610cdc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ad9061152a565b507ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b6040518060800160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160608152602001600081525090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b803573ffffffffffffffffffffffffffffffffffffffff81168114610da157600080fd5b919050565b60008083601f840112610db7578182fd5b50813567ffffffffffffffff811115610dce578182fd5b6020830191508360208083028501011115610de857600080fd5b9250929050565b600082601f830112610dff578081fd5b813567ffffffffffffffff80821115610e1457fe5b602080830260405182828201018181108582111715610e2f57fe5b604052848152945081850192508582018187018301881015610e5057600080fd5b600091505b84821015610e73578035845292820192600191909101908201610e55565b505050505092915050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081168114610da157600080fd5b60008083601f840112610ebf578182fd5b50813567ffffffffffffffff811115610ed6578182fd5b602083019150836020828501011115610de857600080fd5b60008060008060008060008060a0898b031215610f09578384fd5b610f1289610d7d565b9750610f2060208a01610d7d565b9650604089013567ffffffffffffffff80821115610f3c578586fd5b610f488c838d01610da6565b909850965060608b0135915080821115610f60578586fd5b610f6c8c838d01610da6565b909650945060808b0135915080821115610f84578384fd5b50610f918b828c01610eae565b999c989b5096995094979396929594505050565b60008060008060008060a08789031215610fbd578182fd5b610fc687610d7d565b9550610fd460208801610d7d565b94506040870135935060608701359250608087013567ffffffffffffffff811115610ffd578283fd5b61100989828a01610eae565b979a9699509497509295939492505050565b60006020828403121561102c578081fd5b8151801515811461103b578182fd5b9392505050565b60008060408385031215611054578182fd5b61105d83610e7e565b9150602083013567ffffffffffffffff80821115611079578283fd5b908401906080828703121561108c578283fd5b6040516080810181811083821117156110a157fe5b6040526110ad83610d7d565b81526020830135828111156110c0578485fd5b6110cc88828601610def565b6020830152506040830135828111156110e3578485fd5b6110ef88828601610def565b604083015250606083013560608201528093505050509250929050565b600080828403608081121561111f578283fd5b61112884610e7e565b925060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082011215611159578182fd5b506040516060810181811067ffffffffffffffff8211171561117757fe5b60405261118660208501610d7d565b81526040840135602082015260608401356040820152809150509250929050565b6000602082840312156111b8578081fd5b5051919050565b600080600080606085870312156111d4578384fd5b843593506111e460208601610d7d565b9250604085013567ffffffffffffffff8111156111ff578283fd5b61120b87828801610eae565b95989497509550505050565b60008284527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115611248578081fd5b6020830280836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b8381101561129357815187529582019590820190600101611277565b509495945050505050565b600082845282826020860137806020848601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85011685010190509392505050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b600073ffffffffffffffffffffffffffffffffffffffff808b168352808a1660208401525060a0604083015261137260a08301888a611217565b8281036060840152611385818789611217565b9050828103608084015261139a81858761129e565b9b9a5050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525060a060408301526113e260a0830185611264565b82810360608401526113f48185611264565b838103608090940193909352508152602001949350505050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015284606083015260a06080830152610bf360a08301848661129e565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260200190565b6020808252604e908201527f57726170416e644e6966747973776170236f6e4552433131353542617463685260408201527f656365697665643a204f5244455220524543495049454e54204d55535420424560608201527f205448495320434f4e5452414354000000000000000000000000000000000000608082015260a00190565b6020808252603c908201527f57726170416e644e6966747973776170236f6e4552433131353552656365697660408201527f65643a20494e56414c49445f455243313135355f524543454956454400000000606082015260800190565b60208082526041908201527f57726170416e644e6966747973776170236f6e4552433131353542617463685260408201527f656365697665643a20494e56414c49445f455243313135355f5245434549564560608201527f4400000000000000000000000000000000000000000000000000000000000000608082015260a00190565b60208082526043908201527f57726170416e644e69667479737761702377726170416e64537761703a204f5260408201527f44455220524543495049454e54204d555354204245205448495320434f4e545260608201527f4143540000000000000000000000000000000000000000000000000000000000608082015260a0019056fea264697066735822122014c34f432ef55589ab5e6515f2c30fa06ffe55a37c226a7627f232bacb1c1cd164736f6c63430007040033";
