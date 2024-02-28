import React, { useState } from 'react';
import { LuWallet2 } from 'react-icons/lu';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import {
  useDisconnect,
  useWeb3Modal,
  useWeb3ModalAccount,
} from '@web3modal/ethers5/react';

function ConnectButton() {
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const [errorMessage, setErrorMessage] = useState(null);

  //*************************** Connect WalletConnect ***************************** */
  const handleConnectWallet = async () => {
    await open();
  };

  //************************* Disconnect Wallet *************************** */

  const handleDisconnectWallet = async () => {
    await disconnect();
  };

  //********************** Show Address in button ****************************** */
  const truncateAddress = (address, length) => {
    return address.slice(0, length) + '...';
  };

  return (
    <>
      <button
        className={`bg-CustomGreenColor to-[#161328] rounded-lg text-black px-4 py-2 h-full flex items-center justify-center 
      ${isConnected ? 'bg-red-500' : ''}`}
        onClick={() =>
          isConnected ? handleDisconnectWallet() : handleConnectWallet()
        }
      >
        <LuWallet2
          className="text-4xl"
          size={20}
          icon={faWallet}
          style={{ color: 'black' }}
        />

        <span className="text-[14px] ml-2 text-center font-medium hidden lg:inline ">
          {isConnected
            ? `${truncateAddress(address, 6)} Disconnect`
            : 'Connect wallet'}
        </span>
      </button>

      {/* //****************************** Modal ********************** */}

      {/* <ConnectWalletModal
        isOpen={isModalOpen}
        onCancel={handleCancel}
        onConnect={handleConnectWallet}
        onConnectMetaMask={handleWalletConnectMetaMask}
      /> */}
    </>
  );
}

export default ConnectButton;
