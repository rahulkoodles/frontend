import React from "react";
import Card from "../Card/Card";
import Allfilter from "../allfilter/Allfilter";
import Header from "../header/Header";
import GlobalStyle from "../../GlobalStyle/GlobalStyle";

const CardCollections = () => {
  return (
    <div className=" flex flex-wrap">
      <Header/>
      <GlobalStyle/>
      <div>
        <Allfilter />
      </div>
      <div className="flex flex-wrap gap-[20px] mt-[20px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardCollections;
