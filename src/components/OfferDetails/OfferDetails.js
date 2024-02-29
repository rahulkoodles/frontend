import React, { useEffect } from 'react';
import OfferDetailsPurchaseCard from './OfferDetailsPurchaseCard/OfferDetailsPurchaseCard';
import OfferDetailsCard from './OfferDetailsCard/OfferDetailsCard';
import { StyledDiv } from '../../styles/styelsOfferdetails';
import OrderHistory from './OrderHistory/OrderHistory';
import { useParams } from 'react-router-dom';
import useSigner from '../../hooks/useSigner';
import Escrow9MMContract from '../../web3/contracts/Escrow9MM';

const OfferDetails = () => {
  const { id } = useParams();

  const { isConnected, provider } = useSigner();

  useEffect(() => {
    if (!isConnected) return;
    const escrow9mmContract = new Escrow9MMContract(provider);
    escrow9mmContract.getOfferById(id).then(console.log).catch(console.error);
  }, [isConnected]);

  return (
    <StyledDiv>
      <div className="w-full  grid grid-cols-12 gap-4 relative">
        <div className="col-span-12 flex lg:flex-nowrap max-md:flex-wrap gap-5">
          <div className=" md:w-[60%]  bg-CustomCardBgColor rounded-md">
            <OfferDetailsPurchaseCard isConnected={isConnected} />
          </div>
          <div className="md:w-[40%] bg-CustomCardBgColor rounded-md">
            <OfferDetailsCard />
          </div>
        </div>
      </div>
      <OrderHistory />
    </StyledDiv>
  );
};

export default OfferDetails;
