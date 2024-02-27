import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import NotificationDrawer from "../Notification/NotificationDrawer";
import NotificationDrawerComponent from "../Notification/NotificationDrawerComponent";
import { Link, useLocation } from "react-router-dom";
import ConnectButton from "../ConnectButton/ConnectButton";
import EthImg from "../../imgs/ethereum-eth-logo.png";
import PulseImg from "../../imgs/pulse.png";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { ConfigProvider, Select } from "antd";
import { HeaderStyled } from "../../styles/styleHeader";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const location = useLocation();

  console.log("location", location);

  return (
    <div className="w-full">
      <HeaderStyled>
        <ConfigProvider
          theme={{
            components: {
              Select: {
                optionActiveBg: "#121212",
                optionSelectedColor: "#121212",
                selectorBg: "#121212",
                multipleItemBg: "#121212",
                multipleItemColorDisabled: "#121212",
              },
            },
          }}
        >
          <div className=" w-full flex items-center justify-between gap-4 py-4 px-3  h-fit container-2xl border-b-2  border-[#47474766]">
            <nav className="h-full w-full flex items-center justify-between  mx-[19px]">
              <div className=" h-[64px] flex justify-between items-center ">
                <h1 className="text-[20px] text-white">
                  {location.pathname === "/" && "OTC Market"}
                  {location.pathname === "/dashboard" && "Dashboard"}

                  {location.pathname === "/createoffer" && (
                    <Link to="/">
                      <ArrowLeftOutlined className=" mr-2" />
                      Create Offer OTC Market
                    </Link>
                  )}
                  {location.pathname === "/offerdetails" && (
                    <Link to="/">
                      <ArrowLeftOutlined className=" mr-2" />
                      Offer Details
                    </Link>
                  )}
                </h1>
              </div>

              <div className="chain-selector h-[2.5rem] flex items-center gap-4 text-white">
                {/* //******************** Salona ********************** */}

                <div className=" h-[40px] !hover:text-white md:!w-[152px] w-[60px] sm:w-[80px]  ">
                  <div className="text-white w-[152px] h-[40px] flex justify-between items-center text-[14px]">
                    <Select
                      value="ethereum"
                      className=" bg-[#121212]  h-full flex flex-wrap md:!w-[152px] sm:w-[80px] border-[1px] rounded-[8px]"
                      getPopupContainer={(trigger) => trigger.parentElement}
                    >
                      <Select.Option
                        className=" bg-[#121212]  "
                        value="ethereum"
                        dropdownStyle={{ backgroundColor: "green" }}
                      >
                        <div className="flex flex-wrap gap-2 items-center">
                          <img
                            src={EthImg}
                            alt="Ethereum"
                            className=" h-5 w-5 rounded "
                          />
                          <span className="hidden lg:inline  text-white">
                            Ethereum
                          </span>
                        </div>
                      </Select.Option>
                      <Select.Option className=" bg-[#121212] " value="pulse">
                        <div className="flex flex-wrap gap-2 items-center">
                          <img
                            src={PulseImg}
                            alt="Ethereum"
                            className=" h-5 w-5 rounded "
                          />
                          <span className="hidden lg:inline text-white">
                            Pulse
                          </span>
                        </div>
                      </Select.Option>
                    </Select>
                  </div>
                </div>

                {/* //*********************** Open Modal Button ********************** */}
                <ConnectButton />

                <div className="border-[1px] border-gray-100 flex justify-center items-center px-2 h-[40px] w-[50px] rounded-md cursor-pointer gap-0.5 ">
                  <span className="text-[14px]">🎁</span>
                </div>
                <div
                  className="border-2 border-ct-white-800 flex justify-center items-center px-2 h-[40px] w-[50px] rounded-md cursor-pointer gap-0.5"
                  onClick={showDrawer}
                >
                  <span className="text-xl text-gray">
                    <FaBell style={{ color: "gray" }} />
                  </span>
                </div>

                {/* // */}
                <NotificationDrawer
                  open={openDrawer}
                  onClose={() => setOpenDrawer(false)}
                />
                <NotificationDrawerComponent />

                <div className="sm:hidden   flex justify-center items-center px-2 h-[40px] w-[60px] rounded-xl cursor-pointer gap-0.5 ">
                  <span className="text-4xl bg-CustomGreenColor w-full h-full text-black rounded-lg text-center">
                    +
                  </span>
                </div>
              </div>
            </nav>

            <hr />
          </div>
        </ConfigProvider>
      </HeaderStyled>
    </div>
  );
};

export default Header;
