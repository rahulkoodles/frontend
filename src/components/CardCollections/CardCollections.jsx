import React from "react";
import Card from "../Card/Card";
import Allfilter from "../Allfilter/Allfilter";

const CardCollections = () => {
  return (
    <div className=" flex flex-wrap mx-[19px] gap-[24px] mt-[35px] ">
      <div className=" grid w-full ">
        <Allfilter />
      </div>
      <div className="grid  md:grid-cols-1 customMdd:grid-cols-2  xl:grid-cols-3 w-full gap-[20px] ">
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
