import React from "react";
import { Route, Routes } from "react-router-dom";
import CardCollections from "../components/CardCollections/CardCollections";
import OfferDetails from "../components/offerDetails/OfferDetails";
import Header from "../components/header/Header";
import GlobalStyle from "../GlobalStyle/GlobalStyle";
// import CreateOfferOTCMarket from "../components/ CreateOfferOTCMarket/ CreateOfferOTCMarket";

const RoutesPages = () => {
  return (
    <div>
      <Header />
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<CardCollections />} />
        <Route path="/offerdetails" element={<OfferDetails />} />
        {/* <Route path="/createoffer" element={<CreateOfferOTCMarket />} /> */}
      </Routes>
    </div>
  );
};

export default RoutesPages;