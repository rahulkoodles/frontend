import { Button } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { StyledSidebarDiv } from "../../styles/styleSidebar";
import { DollarOutlined, WalletOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logo from '../../imgs/logo.png'

const Sidebar = () => {
  return (
    <StyledSidebarDiv>
      <div className=" flex p-[12px] border-r border-[#202631] max-sm:hidden ">
        <Sider>
          <div className=" w-[353px] h-[75px] flex flex-wrap gap-10 items-center ">
            <div className="flex items-center gap-4 ml-4">
              <div>
              <a class="flex items-center mt-1" href="/">
                <img
                  alt=""
                  class="h-16 cursor-pointer"
                  src={Logo}
                />
              </a>
              </div>
            <div>
              {/* <WalletOutlined className=" text-[#42454F] active:text-[CustomGreenColor] " /> */}
              <span className="text-xl text-white">9MM</span>
            </div>
            </div>
          </div>
          <div className=" h-[200px] border-b-2 border-[#202631]  ">
            <div className=" w-full h-[48px] bg-[#ffffff0A] p-[12px] flex justify-around rounded-md hover:bg-[#411E7C] mt-10 ">
              <div className=" w-[24px] h-[24px] ">
                <DollarOutlined className=" text-CustomGreenColor " />
              </div>
              <span className="text-[20px] text-CustomGreenColor">
                OTC Market
              </span>
            </div>
          </div>
          <div className="create-class w-full h-[45px] mt-10 mb-10  border-[rgba(36, 36, 36, 1)] ">
            <Link to="/createoffer">
              <Button className=" w-full h-full bg-CustomGreenColor hover:bg-CustomGreenColor border-none ">
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
