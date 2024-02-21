import { Drawer, Input, Radio } from "antd";
import React from "react";
import { StyledAllfilter } from "../../styles/styelsOfferdetails";
import { SearchOutlined } from "@ant-design/icons";
import DrawerFilter from "./DrawerFilter";

const Allfilter = () => {
  return (
    <StyledAllfilter>
      <div className="filter-btn ">
        <Radio.Group className="">
          <Radio.Button   className="  text-[#FFFFFF40] text-[14px] before:bg-transparent" value="Buy">
            Buy
          </Radio.Button>
          <Radio.Button  className="text-[#FFFFFF40]  text-[14px] before:content-[none] " value="Sell">
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
      <div className="filter-btn">
        <Radio.Group>
          <Radio.Button
            className=" text-[#FFFFFF40] font-[500] text-[14px] before:bg-transparent"
            value="Strict List"
          >
            Strict List
          </Radio.Button>
          <Radio.Button className=" text-[#FFFFFF40] text-[14px] before:bg-transparent" value="All">
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
      <DrawerFilter />
    </StyledAllfilter>
  );
};

export default Allfilter;
