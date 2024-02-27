import React from "react";
import OfferDetailsPurchaseCard from "./OfferDetailsPurchaseCard/OfferDetailsPurchaseCard";
import OfferDetailsCard from "./OfferDetailsCard/OfferDetailsCard";
import { StyledDiv } from "../../styles/styelsOfferdetails";
import OrderHistory from "./OrderHistory/OrderHistory";

const offerDetails = () => {
  return (
    <StyledDiv>
      <div className="w-full  grid grid-cols-12 gap-4 relative  ">
        <div className=" col-span-12 flex lg:flex-nowrap max-md:flex-wrap gap-5 ">
          <div className=" md:w-[60%]  bg-CustomCardBgColor rounded-md">
            <OfferDetailsPurchaseCard />
          </div>
          <div className="  md:w-[40%] bg-CustomCardBgColor rounded-md">
            <OfferDetailsCard />
          </div>
        </div>
      </div>
      <OrderHistory />
    </StyledDiv>
  );
};

export default offerDetails;
