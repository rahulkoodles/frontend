import React, { useCallback, useEffect, useState } from 'react';
import Card from '../Card/Card';
import Allfilter from '../Allfilter/Allfilter';
import Escrow9MMContract from '../../web3/contracts/Escrow9MM';
import useSigner from '../../hooks/useSigner';
import WalletConnect from '../WalletConnect/WalletConnect';

const CardCollections = () => {
  const [offers, setOffers] = useState([]);
  const { isConnected, signer } = useSigner();

  const fetchOffers = useCallback(async () => {
    if (!isConnected) return;
    const escrow9mmContract = new Escrow9MMContract(signer);
    try {
      const offers = await escrow9mmContract.getAllOffers();
      setOffers(offers);
    } catch (error) {
      console.error(error);
    }
  }, [isConnected]);

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  return (
    <div className="flex flex-wrap mx-[19px] gap-[24px] mt-[35px] ">
      {isConnected ? (
        <>
          <div className=" grid w-full ">
            <Allfilter />
          </div>
          <div className="grid  md:grid-cols-1 customMdd:grid-cols-2  xl:grid-cols-3 w-full gap-[20px] ">
            {offers.map((offer, index) => (
              <Card key={index} id={index + 1} offer={offer} />
            ))}
          </div>
        </>
      ) : (
        <WalletConnect />
      )}
    </div>
  );
};

export default CardCollections;
