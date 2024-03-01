import React, { useState } from "react";
import { ConfigProvider, Select } from "antd";
import { Button, Dropdown, message, Menu } from "antd";
import salonaImg from "../../imgs/salona.png";
import EthImg from "../../imgs/ethereum-eth-logo.png";
import PulseImg from "../../imgs/pulse.png";
import { DropDownStyled } from "../../styles/DropDownStyled";

function DropDown() {
  const chainData = [
    {
      name: "Ethereum",
      img: EthImg,
      value: "ethereum",
    },

    {
      name: "Pulse",
      img: PulseImg,
      value: "pulse",
    },
  ];

  return (
    
      <div className=" text-white h-[40px] flex justify-between items-center text-[14px] bg-transparent w-full">
        <Select
          defaultValue={chainData[0].value}
          className=" bg-transparent h-full flex flex-wrap w-full  border-[1px] rounded-[8px] "
          getPopupContainer={(trigger) => trigger.parentElement}
          onChange={(value) => console.log("Selected value:", value)}
        >
          {chainData.map((item, index) => (
            <Select.Option
              className=""
              value={item.value}
              key={index}
              style={{ backgroundColor: "transparent", color: "white" }}
            >
              <div className="flex flex-wrap gap-2 items-center  ">
                <img src={item.img} alt="" className=" h-5 w-5 rounded " />
                <span className="hidden lg:inline  text-white">
                  {item.name}
                </span>
              </div>
            </Select.Option>
          ))}
        </Select>
        <DropDownStyled/>
      </div>
   
  );
}

export default DropDown;
