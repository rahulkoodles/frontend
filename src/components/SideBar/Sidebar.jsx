import { Button, Divider } from "antd";

import React, { useState } from "react";
import { StyledSidebarDiv } from "../../styles/styleSidebar";
import { DollarOutlined, WalletOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ModalCreateOffer from "../Modal/ModalCreateOffer";
import Logo from "../../imgs/logo.png";
import Sider from "antd/es/layout/Sider";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              {/* <WalletOutlined className=" text-[#42454F] active:text-[CustomGreenColor] " /> */}
              <span className="text-[20px] text-white">9MM</span>
            </div>
          </div>

          <div className="  mt-[105px]   ">
            <div className=" w-full h-[48px] bg-[#ffffff0A] p-[12px] flex justify-around rounded-md  ">
              <div className=" w-[24px] h-[24px] ">
                <DollarOutlined className=" text-CustomGreenColor " />
              </div>
              <span className="text-[20px] text-CustomGreenColor">
                OTC Market
              </span>
            </div>
          </div>

          <Divider className="bg-[#121212] h-[0.5px]"/>

          <div className="create-class w-full h-[80px] mt-10 mb-10  border-[rgba(36, 36, 36, 1)] ">
            <Link to="/createoffer">
              <Button
                onClick={() => setIsOpen(!isOpen)}
                className=" w-full h-[45px] bg-CustomGreenColor hover:bg-CustomGreenColor border-none "
              >
                <ModalCreateOffer isOpen={isOpen} />
                <span className=" font-medium text-[18px] text-black ">
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
