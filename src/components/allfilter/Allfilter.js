import { ConfigProvider, Drawer, Input, Radio } from "antd";
import React from "react";
import { StyledAllfilter } from "../../styles/styelsOfferdetails";
import { SearchOutlined } from "@ant-design/icons";
import DrawerFilter from "./DrawerFilter";
import Pricefilter from "./Pricefilter";

import reLoadImg from "../../imgs/Frame 36.png";

const Allfilter = () => {
  return (
    <StyledAllfilter>
      <ConfigProvider
        theme={{
          token: {
            colorBorder: "transparent",
            optionSelectedBg: "transparent",
          },
        }}
      >
        <div className="filter-btn flex flex-wrap">
          <div>
            <Radio.Group className="">
              <Radio.Button
                className="  text-[#FFFFFF40] text-[14px] before:bg-transparent"
                value="Buy"
              >
                Buy
              </Radio.Button>
              <Radio.Button
                className="text-[#FFFFFF40]  text-[14px] before:content-[none] "
                value="Sell"
              >
                Sell
              </Radio.Button>
              <Radio.Button
                className="text-[#FFFFFF40]  text-[14px] before:bg-transparent "
                value="100% Filled"
              >
                100% Filled
              </Radio.Button>
              <Radio.Button
                className="text-[#FFFFFF40]  text-[14px] before:bg-transparent"
                value="Closed"
              >
                Closed
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="filter-btn">
          <Radio.Group>
            <Radio.Button
              className=" text-[#FFFFFF40] font-[500] text-[14px] before:bg-transparent"
              value="Strict List"
            >
              Strict List
            </Radio.Button>
            <Radio.Button
              className=" text-[#FFFFFF40] text-[14px] before:bg-transparent"
              value="All"
            >
              All
            </Radio.Button>
          </Radio.Group>
        </div>
        <div className="search-filter ">
          <Input
            addonBefore={<SearchOutlined color="#FFFFFF40" />}
            placeholder="Enter the token name "
            className=" outline-none bg-transparent placeholder:text-[#FFFFFF40] "
          />
        </div>
        <DrawerFilter></DrawerFilter>
        <Pricefilter />
        <div className=" w-[32px] h-[32px] border-2 rounded-md bg-[#121212] border-[#d9d9d933] ">
          <img src={reLoadImg} className=" m-1.5"/>
        </div>
      </ConfigProvider>
    </StyledAllfilter>
  );
};

export default Allfilter;
