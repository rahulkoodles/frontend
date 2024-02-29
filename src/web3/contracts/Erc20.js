import { ethers } from 'ethers';
import Erc20Abi from '../abi/Erc20.json';

class Erc20Contract {
  constructor(address, providerOrSigner) {
    this.contact = new ethers.Contract(address, Erc20Abi, providerOrSigner);
  }

  name() {
    return this.contact.name();
  }

  symbol() {
    return this.contact.symbol();
  }

  decimals() {
    return this.contact.decimals();
  }

  approve(spender, value) {
    return this.contact.approve(spender, value);
  }
}

export default Erc20Contract;
