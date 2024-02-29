import React, { useCallback, useEffect, useState } from 'react';
import OfferDetailsPurchaseCard from './OfferDetailsPurchaseCard';
import OfferDetailsCard from './OfferDetailsCard';
import { StyledDiv } from '../../styles/styelsOfferdetails';
import OrderHistory from './OrderHistory';
import { useParams } from 'react-router-dom';
import useSigner from '../../hooks/useSigner';
import Escrow9MMContract from '../../web3/contracts/Escrow9MM';
import Erc20Contract from '../../web3/contracts/Erc20';
import { ethers } from 'ethers';

const OfferDetails = () => {
  const { id } = useParams();
  const { isConnected, signer } = useSigner();

  const [offerDetails, setOfferDetails] = useState({});

  const fetchOfferDetails = useCallback(async () => {
    if (!isConnected) return;

    const escrow9mmContract = new Escrow9MMContract(signer);
    const offer = await escrow9mmContract.getOfferById(id);

    const baseTokenContract = new Erc20Contract(offer.baseToken, signer);
    const quoteTokenContract = new Erc20Contract(offer.quoteToken, signer);

    const [
      baseTokenName,
      baseTokenSymbol,
      baseTokenDecimals,
      quoteTokenSymbol,
      quoteTokenDecimals,
    ] = await Promise.all([
      baseTokenContract.name(),
      baseTokenContract.symbol(),
      baseTokenContract.decimals(),
      quoteTokenContract.symbol(),
      quoteTokenContract.decimals(),
    ]);

    const baseTokenAmount = ethers.utils.formatUnits(
      offer.baseAmount,
      baseTokenDecimals
    );
    const quoteTokenAmount = ethers.utils.formatUnits(
      offer.quoteAmount,
      quoteTokenDecimals
    );
    const pricePerToken = quoteTokenAmount / baseTokenAmount;

    const fillType = offer.offerType === 0 ? 'Partial fill' : 'Single fill';

    const filledAmount = ethers.utils.formatUnits(
      offer.baseAmount.sub(offer.remaningAmount),
      baseTokenDecimals
    );
    const remainingAmount = ethers.utils.formatUnits(
      offer.remaningAmount,
      baseTokenDecimals
    );

    const filledPercentage = Number(
      offer.baseAmount.sub(offer.remaningAmount).mul(100).div(offer.baseAmount)
    );

    setOfferDetails({
      baseTokenName,
      baseTokenSymbol,
      baseTokenAmount,
      quoteTokenSymbol,
      quoteTokenAmount,
      pricePerToken,
      fillType,
      filledAmount,
      remainingAmount,
      filledPercentage,
      ...offer,
    });
  }, [isConnected]);

  useEffect(() => {
    fetchOfferDetails();
  }, [fetchOfferDetails]);

  return (
    <StyledDiv>
      <div className="w-full  grid grid-cols-12 gap-4 relative">
        <div className="col-span-12 flex lg:flex-nowrap max-md:flex-wrap gap-5">
          <div className=" md:w-[60%]  bg-CustomCardBgColor rounded-md">
            <OfferDetailsPurchaseCard
              id={id}
              offerDetails={offerDetails}
              fetchOfferDetails={fetchOfferDetails}
            />
          </div>
          <div className="md:w-[40%] bg-CustomCardBgColor rounded-md">
            <OfferDetailsCard offerDetails={offerDetails} />
          </div>
        </div>
      </div>
      {/* <OrderHistory /> */}
    </StyledDiv>
  );
};

export default OfferDetails;
