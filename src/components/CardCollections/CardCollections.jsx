import React from "react";
import Card from "../Card/Card";
import Allfilter from "../allfilter/Allfilter";

const CardCollections = () => {
  return (
    <div className=" flex flex-wrap justify-center">
      <div>
        <Allfilter />
      </div>
      <div className="flex flex-wrap gap-[20px] mt-[20px] justify-evenly">
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

