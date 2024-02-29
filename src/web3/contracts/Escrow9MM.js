import { ethers } from 'ethers';
import config from '../../config';
import Escrow9MMabi from '../abi/Escrow9MM.json';

class Escrow9MMContract {
  constructor(signerOrProvider) {
    this.contract = new ethers.Contract(
      config.ESCROW_9MM_CONTRACT_ADDRESS,
      Escrow9MMabi,
      signerOrProvider
    );
  }

  createOffer(
    baseToken,
    baseAmount,
    quoteToken,
    quoteAmount,
    fillType,
    tradeType
  ) {
    return this.contract.createOffer(
      baseToken,
      baseAmount,
      quoteToken,
      quoteAmount,
      fillType,
      tradeType
    );
  }

  getAllOffers() {
    return this.contract.getAllOffers();
  }

  getOfferByAddress(address) {
    return this.contract.getOfferByAddress(address);
  }

  getOfferById(id) {
    return this.contract.getOfferById(id);
  }
}

export default Escrow9MMContract;
