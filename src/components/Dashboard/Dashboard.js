import { Divider, Spin } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import useSigner from "../../hooks/useSigner";
import Escrow9MMContract from "../../web3/contracts/Escrow9MM";
import Card from "../Card/Card";
import { LoadingOutlined } from "@ant-design/icons";

const Dashboard = () => {
  const [offers, setOffers] = useState([]);
  const [isOffersLoading, setIsOffersLoading] = useState(false);

  const { isConnected, address, signer } = useSigner();

  const fetchOffers = useCallback(async () => {
    if (!isConnected) return;

    setIsOffersLoading(true);
    try {
      const escrow9mmContract = new Escrow9MMContract(signer);
      const offers = await escrow9mmContract.getAllOffers();
      const offersByAddress = await escrow9mmContract.getOfferByAddress(
        address
      );

      const filteredOffers = offers.filter((_, index) =>
        offersByAddress.some((id) => parseInt(id) === index + 1)
      );

      setOffers(filteredOffers);
    } catch (error) {
      console.error(error);
    } finally {
      setIsOffersLoading(false);
    }
  }, [isConnected]);

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  return (
    <div>
      <div className="ml-6 mt-[50px] ">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2 font-semibold">
            <span className="text-md text-white">My Created Offers</span>
            <span className="p-1 bg-[#1B1B1B] rounded-full text-xs  text-white min-w-[20px] text-center">
              {offers.length}
            </span>
          </span>
        </div>
        <div className=" mt-10">
          <div className="grid  md:grid-cols-1 customMdd:grid-cols-2  xl:grid-cols-3 w-full gap-[20px]">
            {isOffersLoading ? (
              <span className="text-white flex w-full items-center justify-center col-span-4">
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                />
              </span>
            ) : offers.length === 0 ? (
              <span className="flex w-full items-center justify-center col-span-4 font-medium text-white text-base">
                No Offers Found
              </span>
            ) : (
              offers.map((offer, index) => (
                <Card key={index} id={index + 1} offer={offer} />
              ))
            )}
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Dashboard;
