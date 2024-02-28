import { ethers } from "ethers";
import config from "../../config";
import Escrow9MMabi from "../abi/Escrow9MM.json";

class Escrow9MMContract {
  constructor(signerOrProvider) {
    console.log(config);
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
}

export default Escrow9MMContract;
