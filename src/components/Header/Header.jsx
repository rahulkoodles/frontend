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
import Logo from "../../imgs/logo.png";
import HamburgerMenu from "./Hamburger/HamburgerMenu";
import DropDown from "../DropDown/DropDown";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const location = useLocation();

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
    <div
      className="w-full sticky right-0 top-0 z-50 "
      style={{ backdropFilter: "blur(10px)" }}
    >
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
          <div className="">
            <div className=" w-full flex items-center justify-between gap-4 py-4 px-3  h-fit container-2xl border-b-2  border-[#47474766]">
              <nav className="h-full w-full flex items-center justify-between  mx-[19px] mr-3">
                <div className=" h-[64px] flex justify-between items-center ">
                  <h1 className="text-[20px] max-md:text-[15px] text-white max-customLogo:hidden  ">
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
                  <div className=" customLogo:hidden mr-2">
                    <div className=" w-full h-[75px] flex gap-[8px] items-center ">
                      <a className="flex items-center" href="/">
                        <img
                          alt=""
                          className="h-[40px] w-[40px] cursor-pointer"
                          src={Logo}
                        />
                      </a>

                      <div>
                        <span className="text-[20px] leading-[24.42px] font-[500] text-white">
                          9MM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="chain-selector h-[2.5rem] flex items-center gap-4 text-white">
                  {/* //******************** Drop Downn ********************** */}

                  <div className=" h-[40px] !hover:text-white md:!w-[152px] sm:w-[80px]   ">
                    <DropDown />
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

                  <div className="sm:hidden    flex justify-start items-center px-2 h-[40px] w-[60px] rounded-xl cursor-pointer gap-0.5 ">
                    <HamburgerMenu />
                  </div>
                </div>
              </nav>

              <hr />
            </div>
          </div>
        </ConfigProvider>
      </HeaderStyled>
    </div>
  );
};

export default Header;
