import { Button, Divider } from "antd";

import React, { useState } from "react";
import { StyledSidebarDiv } from "../../styles/styleSidebar";
import { DollarOutlined, WalletOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import Logo from "../../imgs/logo.png";
import otclogoImg from "../../imgs/otclogo.png";

const Sidebar = () => {
  return (
    <StyledSidebarDiv>
      <div className=" w-[353px] h-screen flex border-r border-[#121212] max-sm:hidden ">
        <Sider width={353} className=" p-[37px]">
          <div className=" w-full h-[75px] flex flex-wrap gap-10 items-center ">
            <div>
              <a class="flex items-center mt-1" href="/">
                <img alt="" class="h-16 cursor-pointer" src={Logo} />
              </a>
            </div>
            <div>
              <span className="text-xl text-white">9MM</span>
            </div>
          </div>
          <Link to="/">
            <div className="">
              <div className="w-full h-[48px] bg-[#ffffff0A] p-[12px] flex items-center gap-4 rounded-md  mt-10">
                <div className="w-[24px] h-[24px] ">
                  <img src={otclogoImg} alt="" className="" />
                </div>
                <span className="text-[14px] font-[500] leading-[17.09px] text-CustomGreenColor">
                  OTC Market
                </span>
              </div>
            </div>
          </Link>
          <Divider className=" mt-10 border-b-1 border-[#121212]" />
          <div className="create-class w-full h-[45px] mt-10 mb-10  border-[rgba(36, 36, 36, 1)]">
            <Link to="/createoffer">
              <Button
                // onClick={handleOpenModal}
                className="w-full h-full bg-CustomGreenColor hover:bg-CustomGreenColor border-none"
              >
                <span className="font-medium text-[18px] text-black ">
                  Create Offer
                </span>
              </Button>
            </Link>
          </div>
        </Sider>
      </div>
    </StyledSidebarDiv>
  );
};

export default Sidebar;
