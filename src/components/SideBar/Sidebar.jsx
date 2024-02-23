import { Button, Divider } from "antd";

import React, { useState } from "react";
import { StyledSidebarDiv } from "../../styles/styleSidebar";
import { DollarOutlined, WalletOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ModalCreateOffer from "../Modal/ModalCreateOffer";
import Sider from "antd/es/layout/Sider";
// import ModalCreateOffer from "../Modal/ModalCreateOffer";
import Logo from '../../imgs/logo.png'


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
          <div className="">
            <div className="w-full h-[48px] bg-[#ffffff0A] p-[12px] flex justify-around rounded-md  mt-10">
              <div className="w-[24px] h-[24px] ">
                <DollarOutlined className="text-CustomGreenColor" />
              </div>
              <span className="text-[14px] font-[500] leading-[17.09px] text-CustomGreenColor">
                OTC Market
              </span>
            </div>
          </div> 
          <Divider className=" mt-10 border-b-1 border-[#121212]"/>
          <div className="create-class w-full h-[45px] mt-10 mb-10  border-[rgba(36, 36, 36, 1)]">
            <Button
              // onClick={handleOpenModal}
              className="w-full h-full bg-CustomGreenColor hover:bg-CustomGreenColor border-none"
            >

              <Link to='/createoffer'>
              <span className="font-medium text-[18px] text-black ">
                Create Offer
              </span>
              </Link>
            </Button>
          </div>
        </Sider>
      </div>
      
    </StyledSidebarDiv>
  );
};

export default Sidebar;
