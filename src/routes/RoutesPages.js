import React from "react";
import { Route, Routes } from "react-router-dom";
import CardCollections from "../components/CardCollections/CardCollections";
import OfferDetails from "../components/offerDetails/OfferDetails";
import CreateOfferOTCMarket from "../components/ CreateOfferOTCMarket/ CreateOfferOTCMarket";

const RoutesPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CardCollections />} />
        <Route path="/offerdetails" element={<OfferDetails />} />
        <Route path="/createoffer" element={<CreateOfferOTCMarket />} />
      </Routes>
    </div>
  );
};

export default RoutesPages;
