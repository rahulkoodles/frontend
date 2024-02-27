import React, { useState } from "react";
import { LuWallet2 } from "react-icons/lu";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import {
  useDisconnect,
  useWeb3Modal,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { Button, Divider, Modal } from "antd";

import ConnectWalletModal from "./ConnectWalletModal";

function ConnectButton(props) {
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
    <>
      <button
        className={`bg-CustomGreenColor w-ful to-[#161328] w-full rounded-lg text-black px-4 py-2 h-full flex items-center justify-center 
            ${isConnected ? "bg-red-500" : ""}`}
        onClick={!isConnected ? showModal : handleDisconnectWallet}
      >
        <LuWallet2
          className="text-4xl"
          size={20}
          icon={faWallet}
          style={{ color: "black" }}
        />

        <span className="text-[14px] ml-2 text-center font-[400] hidden lg:inline ">
          {address && address.length > 0
            ? truncateAddress(address, 6)
            : "Connect wallet"}
        </span>
        {address && address.length > 0 ? (
          <span className="ml-2 w-full">Disconnect</span>
        ) : null}
      </button>

      {/* //****************************** Modal ********************** */}

      <ConnectWalletModal
        isOpen={isModalOpen}
        onCancel={handleCancel}
        onConnect={handleConnectWallet}
      />
    </>
  );
}

export default ConnectButton;
