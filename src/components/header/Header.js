import React from "react";
import { Modal } from "antd";
import { FaBell } from "react-icons/fa";

const Header = () => {
  const address = true;
  return (
    <div className="">
      <nav className="h-full w-full flex items-center justify-between  px-[19px]">
        <div className=" h-[64px] flex justify-between items-center ">
          <h1 className="text-3xl text-white">OTC Market</h1>
        </div>

        <div className=" h-[2.5rem] flex items-center gap-4 text-white">
          {/* <DropDown /> */}
          <button
            className={`bg-[#87EE94] to-[#161328] rounded-lg text-black px-4 h-full flex items-center  ${
              address ? "bg-red-500" : ""
            }`}
            // onClick={address ? handleDisconnectWallet : handleConnectWallet}
          >
            {/* <LuWallet2
              className="text-md"
              size={20}
              icon={faWallet}
              style={{ color: "black" }}
            />
            <span className="text-[14px] ml-2 text-center font-medium">
              {address && address.length > 0
                ? truncateAddress(address, 6)
                : "Connect Wallet"}
            </span> */}
            {/* {address && address.length > 0 ? (
              <span className="ml-2">Disconnect</span>
            ) : null} */}
          </button>

          <div className="border-2 border-gray-100 flex justify-center items-center px-2 h-[40px] w-[50px] rounded-md cursor-pointer gap-0.5 ">
            <span className="text-xl">🎁</span>
          </div>
          <div className="border-2 border-ct-white-800 flex justify-center items-center px-2 h-[40px] w-[50px] rounded-md cursor-pointer gap-0.5 ">
            <span className="text-xl text-gray">
              {/* <FaBell style={{ color: "gray" }} /> */}
            </span>
          </div>

          <div className="lg:hidden   flex justify-center items-center px-2 h-[40px] w-[60px] rounded-xl cursor-pointer gap-0.5 ">
            <span className="text-4xl bg-[#87EE94] w-full h-full text-black rounded-lg">
              +
            </span>
          </div>

        </div>
      </nav>

      <hr />

      <Modal
        title="Wallet Connection"
        // open={isModalOpen}
        // onOk={handleOk}
        // onCancel={handleCancel}
        style={{ width: "20px" }}
        width={350}
      >
        <div className=" flex flex-col gap-6">
          <button
            className={`bg-[rgb(135,238,148)] rounded-lg text-black px-4 h-full flex items-center`}
            // onClick={connectMetaMaskWallet}
          >
            <span className="text-xl ml-2 text-center font-medium">
              Meta Mask
            </span>
          </button>

          <button
            className={`bg-[#87EE94] rounded-lg text-black px-4 h-full flex items-center`}
            // onClick={address ? handleDisconnectWallet : handleConnectWallet}
          >
            <span className="text-xl ml-2 text-center font-medium">
              Wallet Connect
            </span>
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
