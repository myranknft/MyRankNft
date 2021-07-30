export const INFURA_ADDRESS ="https://mainnet.infura.io/v3/a629a59e657a4d9eb1e238b225133149"

export const ADDRESS = "0x1BFcf3E7532e2947Cac2FEc455a4229553183eBc"

export const ABI = [
	{
	   "inputs": [
		  {
			 "internalType": "string",
			 "name": "baseURI",
			 "type": "string"
		  }
	   ],
	   "stateMutability": "nonpayable",
	   "type": "constructor"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "owner",
			 "type": "address"
		  },
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "approved",
			 "type": "address"
		  },
		  {
			 "indexed": true,
			 "internalType": "uint256",
			 "name": "tokenId",
			 "type": "uint256"
		  }
	   ],
	   "name": "Approval",
	   "type": "event"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "owner",
			 "type": "address"
		  },
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "operator",
			 "type": "address"
		  },
		  {
			 "indexed": false,
			 "internalType": "bool",
			 "name": "approved",
			 "type": "bool"
		  }
	   ],
	   "name": "ApprovalForAll",
	   "type": "event"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "previousOwner",
			 "type": "address"
		  },
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "newOwner",
			 "type": "address"
		  }
	   ],
	   "name": "OwnershipTransferred",
	   "type": "event"
	},
	{
	   "anonymous": false,
	   "inputs": [
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "from",
			 "type": "address"
		  },
		  {
			 "indexed": true,
			 "internalType": "address",
			 "name": "to",
			 "type": "address"
		  },
		  {
			 "indexed": true,
			 "internalType": "uint256",
			 "name": "tokenId",
			 "type": "uint256"
		  }
	   ],
	   "name": "Transfer",
	   "type": "event"
	},
	{
	   "inputs": [],
	   "name": "MAX_RANK",
	   "outputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "to",
			 "type": "address"
		  },
		  {
			 "internalType": "uint256",
			 "name": "tokenId",
			 "type": "uint256"
		  }
	   ],
	   "name": "approve",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "owner",
			 "type": "address"
		  }
	   ],
	   "name": "balanceOf",
	   "outputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "tokenId",
			 "type": "uint256"
		  }
	   ],
	   "name": "getApproved",
	   "outputs": [
		  {
			 "internalType": "address",
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "owner",
			 "type": "address"
		  },
		  {
			 "internalType": "address",
			 "name": "operator",
			 "type": "address"
		  }
	   ],
	   "name": "isApprovedForAll",
	   "outputs": [
		  {
			 "internalType": "bool",
			 "name": "",
			 "type": "bool"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "_to",
			 "type": "address"
		  },
		  {
			 "internalType": "uint256",
			 "name": "_count",
			 "type": "uint256"
		  }
	   ],
	   "name": "mintRANK",
	   "outputs": [],
	   "stateMutability": "payable",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "name",
	   "outputs": [
		  {
			 "internalType": "string",
			 "name": "",
			 "type": "string"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "owner",
	   "outputs": [
		  {
			 "internalType": "address",
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "tokenId",
			 "type": "uint256"
		  }
	   ],
	   "name": "ownerOf",
	   "outputs": [
		  {
			 "internalType": "address",
			 "name": "",
			 "type": "address"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "_count",
			 "type": "uint256"
		  }
	   ],
	   "name": "price",
	   "outputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "renounceOwnership",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "from",
			 "type": "address"
		  },
		  {
			 "internalType": "address",
			 "name": "to",
			 "type": "address"
		  },
		  {
			 "internalType": "uint256",
			 "name": "tokenId",
			 "type": "uint256"
		  }
	   ],
	   "name": "safeTransferFrom",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "from",
			 "type": "address"
		  },
		  {
			 "internalType": "address",
			 "name": "to",
			 "type": "address"
		  },
		  {
			 "internalType": "uint256",
			 "name": "tokenId",
			 "type": "uint256"
		  },
		  {
			 "internalType": "bytes",
			 "name": "_data",
			 "type": "bytes"
		  }
	   ],
	   "name": "safeTransferFrom",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "operator",
			 "type": "address"
		  },
		  {
			 "internalType": "bool",
			 "name": "approved",
			 "type": "bool"
		  }
	   ],
	   "name": "setApprovalForAll",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "string",
			 "name": "baseURI",
			 "type": "string"
		  }
	   ],
	   "name": "setBaseURI",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "bytes4",
			 "name": "interfaceId",
			 "type": "bytes4"
		  }
	   ],
	   "name": "supportsInterface",
	   "outputs": [
		  {
			 "internalType": "bool",
			 "name": "",
			 "type": "bool"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "symbol",
	   "outputs": [
		  {
			 "internalType": "string",
			 "name": "",
			 "type": "string"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "index",
			 "type": "uint256"
		  }
	   ],
	   "name": "tokenByIndex",
	   "outputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "owner",
			 "type": "address"
		  },
		  {
			 "internalType": "uint256",
			 "name": "index",
			 "type": "uint256"
		  }
	   ],
	   "name": "tokenOfOwnerByIndex",
	   "outputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "uint256",
			 "name": "tokenId",
			 "type": "uint256"
		  }
	   ],
	   "name": "tokenURI",
	   "outputs": [
		  {
			 "internalType": "string",
			 "name": "",
			 "type": "string"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "_owner",
			 "type": "address"
		  }
	   ],
	   "name": "tokensOfOwner",
	   "outputs": [
		  {
			 "internalType": "uint256[]",
			 "name": "",
			 "type": "uint256[]"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "totalSupply",
	   "outputs": [
		  {
			 "internalType": "uint256",
			 "name": "",
			 "type": "uint256"
		  }
	   ],
	   "stateMutability": "view",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "from",
			 "type": "address"
		  },
		  {
			 "internalType": "address",
			 "name": "to",
			 "type": "address"
		  },
		  {
			 "internalType": "uint256",
			 "name": "tokenId",
			 "type": "uint256"
		  }
	   ],
	   "name": "transferFrom",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [
		  {
			 "internalType": "address",
			 "name": "newOwner",
			 "type": "address"
		  }
	   ],
	   "name": "transferOwnership",
	   "outputs": [],
	   "stateMutability": "nonpayable",
	   "type": "function"
	},
	{
	   "inputs": [],
	   "name": "withdrawAll",
	   "outputs": [],
	   "stateMutability": "payable",
	   "type": "function"
	}
 ]
	