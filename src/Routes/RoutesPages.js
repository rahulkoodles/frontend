import React from "react";
import { Route, Routes } from "react-router-dom";
import CardCollections from "../components/CardCollections/CardCollections";
import OfferDetails from "../components/OfferDetails/OfferDetails";
import Header from "../components/Header/Header";
import CreateOfferOTCMarket from "../components/ CreateOfferOTCMarket/ CreateOfferOTCMarket";
import ModalStyle from "../styles/ModalStyel";
import Dashboard from "../components/Dashboard/Dashboard";

const RoutesPages = () => {
  return (
    <div className="w-full">
      <Header />
      <ModalStyle />
      <Routes>
        <Route path="/" element={<CardCollections />} />
        <Route path="/offerdetails" element={<OfferDetails />} />
        <Route path="/createoffer" element={<CreateOfferOTCMarket />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default RoutesPages;
