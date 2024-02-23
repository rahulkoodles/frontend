import React, { useState } from "react";
import { Button, Divider, Modal } from "antd";
import { FaBell } from "react-icons/fa";
import { LuWallet2 } from "react-icons/lu";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import DropDown from "../DropDown/DropDown";
import {
  useDisconnect,
  useWeb3Modal,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";

//Modal
import metaMaskImg from "../../imgs/metamask-icon.png";
import WalletConnectImg from "../../imgs/WalletLogo.png";
import NotificationDrawer from "../notification/NotificationDrawer";
import NotificationDrawerComponent from "../notification/NotificationDrawerComponent";

const Header = () => {

  // Walllet Function-------------

  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const [errorMessage, setErrorMessage] = useState(null);

  //Modal Function------------

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Drawaer Notification------

  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };


  //*************************** Connect Wallet ***************************** */

  const handleConnectWallet = (params) => {
    if (!address) {
      open();
      setIsModalOpen(false);
    }
  };

  //************************* Disconnect Wallet *************************** */

  const handleDisconnectWallet = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        window.ethereum.request({
          method: "wallet_revokePermissions",
          params: [
            {
              eth_accounts: {},
            },
          ],
        });

        await disconnect();

        console.log("disconnet---------------------");
      } catch (error) {
        console.error("Error revoking permissions:", error.message);
      }
    }
  };

  //********************** Show Address in button ****************************** */

  const truncateAddress = (address, length) => {
    return address.slice(0, length) + "...";
  };

  return (
  <div className="w-full">

    <div className=" w-full flex items-center justify-between gap-4 py-4 px-3  h-fit container-2xl border-b-2  border-[#47474766]">
      
      <nav className="h-full w-full flex items-center justify-between  px-[19px]">
        <div className=" h-[64px] flex justify-between items-center ">
          <h1 className="text-3xl text-white">OTC Market</h1>
        </div>

        <div className=" h-[2.5rem] flex items-center gap-4 text-white">
          {/* //******************** Drop Down********************** */}
          <DropDown />

          {/* //*********************** Open Modal Button ********************** */}
          <button
            className={`bg-CustomGreenColor to-[#161328] rounded-lg text-black px-4 h-full flex items-center justify-center 
            ${address ? "bg-red-500" : ""}`}
            onClick={!address ? showModal : handleDisconnectWallet}
          >
            <LuWallet2
              className="text-4xl"
              size={20}
              icon={faWallet}
              style={{ color: "black" }}
            />

            <span className="text-[14px] ml-2 text-center font-medium hidden lg:inline ">
              {address && address.length > 0
                ? truncateAddress(address, 6)
                : "Connect"}
            </span>
            {address && address.length > 0 ? (
              <span className="ml-2">Disconnect</span>
            ) : null}
          </button>

          <div className="border-2 border-gray-100 flex justify-center items-center px-2 h-[40px] w-[50px] rounded-md cursor-pointer gap-0.5 ">
            <span className="text-xl">🎁</span>
          </div>
          <div className="border-2 border-ct-white-800 flex justify-center items-center px-2 h-[40px] w-[50px] rounded-md cursor-pointer gap-0.5"onClick={showDrawer}>
            <span className="text-xl text-gray">
              <FaBell style={{ color: "gray" }} />
            </span>
          </div>

          {/* // */}
          <NotificationDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
          <NotificationDrawerComponent/>

          <div className="lg:hidden   flex justify-center items-center px-2 h-[40px] w-[60px] rounded-xl cursor-pointer gap-0.5 ">
            <span className="text-4xl bg-[#87EE94] w-full h-full text-black rounded-lg text-center">
              +
            </span>
          </div>
        </div>
      </nav>

      <hr />

      {/* //****************************** Modal ********************** */}

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        style={{ width: "20px" }}
        width={450}
        className="modalStyle"
        footer={null}
        closeIcon={null}
      >
        <div className="w-full flex justify-between">
          <div>
            <span className="text-white text-xl">Wallet Connect</span>
          </div>
          <div>
            <span
              className=" text-white bg-red-100flex justify-center items-center hover:bg-[#1A1F2E] px-3 py-2 rounded-full cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <span className="text-lg">X</span>
            </span>
          </div>
        </div>
        <div className=" flex flex-col gap-6 mt-10">
          <div className="w-full  flex justify-center">
            <p className="font-semibold text-2xl text-white">
              {" "}
              Hello Connect Your wallet
            </p>
          </div>

          <button
            className={` rounded-lg text-black px-4 h-full flex items-center hover:bg-[#1A1F2E]`}
            // onClick={connectMetaMaskWallet}
          >
            <div className=" flex gap-4 text-white w-full items-center !hover:bg-red-100">
              <span>
                <img src={metaMaskImg} alt="" className=" w-10 h-10" />
              </span>
              <span className="text-xl ml-2 text-center font-semibold">
                Meta Mask
              </span>
            </div>
          </button>

          {/* // Line between both constract */}

          <div class="flex items-center">
            <hr class="flex-grow border-t border-white mx-1" />
            <span class="text-white font-bold ">Or</span>
            <hr class="flex-grow border-t border-white mx-1" />
          </div>

          {/* //*************** Wallect Connect********************** */}

          <button
            className={` rounded-lg text-black px-4 h-full flex items-center hover:bg-[#1A1F2E]`}
            onClick={address ? handleDisconnectWallet : handleConnectWallet}
          >
            <div className=" flex gap-4 text-white w-full items-center">
              <span>
                <img
                  src={WalletConnectImg}
                  alt=""
                  className="object-cover w-10 h-10"
                />
              </span>
              <span className="text-xl ml-2 text-center font-semibold">
                Wallet Connect
              </span>
            </div>
          </button>
        </div>
      </Modal>
    </div>

    </div>
  );
};

export default Header;
