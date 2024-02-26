import { ethers } from "ethers";
import { whaleAbi } from "../src/abis/whaleAbi";

export const handleWalletConnect = async () => {
  try { 
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    await window.ethereum.send("eth_requestAccounts");
    window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signature = await signer.signMessage("Hi,from OTC");
    const address = await signer.getAddress();

    return {
      signature,
      address,
    };
  } catch (err) {
    // console.log('err', err);
  }
};

export const getProvider = () => {
  if (window.ethereum || window.web3) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    return {
      provider,
      signer,
    };
  } else {
    return false;
  }
};

export const getContractInstance = async (
  contractAddress,
  contractABI,
  signer
) => {
  try {
    if (!window.ethereum) {
      throw new Error("No crypto wallet found. Please install it.");
    }

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    return contract;
  } catch (error) {
    // console.log(error);
  }
};
export const calculateRemainingSeconds = (timestamp) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const endTime = parseInt(timestamp);

  if (endTime > currentTime) {
    const remainingSeconds = endTime - currentTime;

    return remainingSeconds;
  } else {
    return 0;
  }
};

//  *********************** Get Token Balance ********************************** */

export const getTokenBalance = async (address) => {
  const erc20 = await connectSmartContract();
  try {
    const balance = await erc20.balanceOf(address);
    const decimal = await erc20.decimals();
    const formattedBalance = ethers.utils.formatUnits(balance, decimal);
    return formattedBalance;
  } catch (error) {
    console.error("An error occurred:", error);
    return error;
  }
};

// //   *********************** Get Token Name ********************************** */

export const getTokenName = async () => {
  const erc20 = await connectSmartContract();
  try {
    const name = await erc20.name();
    return name;
  } catch (error) {
    console.error("An error occurred In Name:", error);
    return error;
  }
};

//   *********************** Get Token Symbol ********************************** */
export const getTokenSymbol = async () => {
  const erc20 = await connectSmartContract();
  try {
    const symbol = await erc20.symbol();
    console.log("Symbol", symbol);
    return symbol;
  } catch (error) {
    console.error("An error occurred In Symbol:", error);
    return error;
  }
};

//   *********************** Get Token TotalSupply ********************************** */

export const getTokenTotalSupply = async () => {
  const erc20 = await connectSmartContract();
  try {
    const decimal = await erc20.decimals();
    const Supply = await erc20.totalSupply();
    const formattedTotalSupply = ethers.utils.formatEther(Supply, decimal);
    const format = formattedTotalSupply.toString();
    return format;
  } catch (error) {
    console.error("An error occurred In Total Supply:", error);
    return error;
  }
};

//************************ Send Token Mint *********************** */
export const sendTokenMint = async (to, amount) => {
  const erc20 = await connectSmartContract();
  try {
    const decimal = await erc20.decimals();
    const format = ethers.utils.parseUnits(amount, decimal);

    const value = await erc20.mint(to, format);
    return value;
  } catch (error) {
    console.error("An error occurred In Total Supply:", error);
    return error;
  }
};

//************************ Send Token Balance *********************** */

export const sendTokenBalance = async (to, amount) => {
  const erc20 = await connectSmartContract();
  try {
    const decimal = await erc20.decimals();
    const format = ethers.utils.parseUnits(amount, decimal);
    const value = await erc20.transfer(to, format);
    return value;
  } catch (error) {
    console.error("Sending Money Error:", error);
    return error;
  }
};

//************************ Token Approve *********************** */
export const TokenApprove = async (to, amount) => {
  const erc20 = await connectSmartContract();
  try {
    const decimal = await erc20.decimals();
    const format = ethers.utils.parseUnits(amount, decimal);

    console.log("amount format", format);
    const value = await erc20.approve(to, format);
    // return value
  } catch (error) {
    console.error("Sending Approval Error:", error);
    return error;
  }
};

//************************ Send Token Transform *********************** */
export const sendTokenTransform = async (from, to, amount) => {
  const erc20 = await connectSmartContract();
  try {
    const decimal = await erc20.decimals();
    const format = ethers.utils.parseUnits(amount, decimal);
    const value = await erc20.transferFrom(from, to, format);
    return value;
  } catch (error) {
    console.error("Login from Your Account Error:", error);
    return error;
  }
};

//*************************************************************

export const connectSmartContract = async () => {
  const result = getProvider();
  const signer = result.signer;
  const erc20ContractAddress = "0x060B673B58aEAb73a4851B233a00aA305BE21B72";
  const erc20 = new ethers.Contract(erc20ContractAddress, whaleAbi, signer);
  return erc20;
};
