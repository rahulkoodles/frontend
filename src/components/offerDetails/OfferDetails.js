import React from "react";
import OfferDetailsPurchaseCard from "./offerDetailsPurchaseCard/OfferDetailsPurchaseCard";
import OfferDetailsCard from "./offerDetailsCard/OfferDetailsCard";
import { StyledDiv } from "../../styles/styelsOfferdetails";
import OrderHistory from "./orderHistory/OrderHistory";

const offerDetails = () => {
  return (
    <StyledDiv>
      <div className="w-full  grid grid-cols-12 gap-4 relative ">
        <div className=" col-span-12 flex lg:flex-nowrap max-md:flex-wrap gap-5 justify-center">
          <div className=" w-full bg-CustomCardBgColor rounded-md">
            <OfferDetailsPurchaseCard />
          </div>
          <div className=" w-full bg-CustomCardBgColor rounded-md">
            <OfferDetailsCard />
          </div>
        </div>
      </div>
      <div className=" col-span-6">
        <OrderHistory />
      </div>
    </StyledDiv>
  );
};

export default offerDetails;
