//import Web3 from "web3/dist/web3.min.js";
import Auth from "./build/contracts/Auth.json";
import RegistrationContract from "./build/contracts/RegistrationContract.json";

import Web3 from "web3";

export const loadWeb3 = async () => {
if (window.ethereum) {
	window.web3 = new Web3(window.ethereum);
	await window.ethereum.enable();
} else if (window.web3) {
	window.web3 = new Web3(window.web3.currentProvider);
} else {
	window.alert(
	"Non-Ethereum browser detected. You should consider trying MetaMask!"
	);
}
};

export const loadBlockchainData = async () => {
const web3 = window.web3;
// Load account
const accounts = await web3.eth.getAccounts();

// Network ID



const networkId = await web3.eth.net.getId();


// Network data

if (networkId) {
	const auth = new web3.eth.Contract(
	Auth.abi,
	Auth.networks[networkId].address
	);

	const register=new web3.eth.Contract(
		RegistrationContract.abi,
		RegistrationContract.networks[networkId].address
	);

	

	return { auth,register, accounts: accounts[0] };
	

}
};
