import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import DropDown from "../DropDown/DropDown";
import NotificationDrawer from "../notification/NotificationDrawer";
import NotificationDrawerComponent from "../notification/NotificationDrawerComponent";
import ConnectButton from "../ConnectButton/ConnectButton";
import salonaImg from "../../imgs/salona.png";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <div className="w-full">
      <div className=" w-full flex items-center justify-between gap-4 py-4 px-3  h-fit container-2xl border-b-2  border-[#47474766]">
        <nav className="h-full w-full flex items-center justify-between  px-[19px]">
          <div className=" h-[64px] flex justify-between items-center ">
            <h1 className="text-3xl text-white">OTC Market</h1>
          </div>

          <div className=" h-[2.5rem] flex items-center gap-4 text-white">
            {/* //******************** Salona ********************** */}

            <div className="h-[40px] !hover:text-white md:!w-[152px] w-[60px] sm:!w-[80px] border rounded-lg ">
              <div className="text-white w-[10rem] h-[40px] flex items-center justify-between text-lg">
                <div className="flex gap-2 items-center">
                  <img src={salonaImg} alt="" />
                  <span className="hidden lg:inline">Solana</span>
                </div>
              </div>
            </div>

            {/* //*********************** Open Modal Button ********************** */}
            <ConnectButton />

            <div className="border-2 border-gray-100 flex justify-center items-center px-2 h-[40px] w-[50px] rounded-md cursor-pointer gap-0.5 ">
              <span className="text-xl">🎁</span>
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
            <div className="lg:hidden   flex justify-center items-center px-2 h-[40px] w-[60px] rounded-xl cursor-pointer gap-0.5 ">
              <span className="text-4xl bg-[#87EE94] w-full h-full text-black rounded-lg text-center">
                +
              </span>
            </div>
          </div>
        </nav>
        <hr />
      </div>
    </div>
  );
};

export default Header;
