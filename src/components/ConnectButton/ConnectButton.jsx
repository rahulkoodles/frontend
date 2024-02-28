import React, { useState, useEffect } from 'react';
import { LuWallet2 } from 'react-icons/lu';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import {
  useDisconnect,
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from '@web3modal/ethers5/react';
import { Button, Divider, Modal } from 'antd';

import ConnectWalletModal from './ConnectWalletModal';
import { handleWalletConnect } from '../../EtherHelper';
import { useDispatch, useSelector } from 'react-redux';
import { setWalletAddress } from '../Redux/Feature/Feature';
import { ethers } from 'ethers';

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

  const walletAddressRedux = useSelector((state) => state.auth.WalletAddress);
  const savedMetaMaskAddress = localStorage.getItem('walletAddress');
  const walletAddress = savedMetaMaskAddress || walletAddressRedux;

  useEffect(() => {
    addWalletListner();
  }, []);

  const dispatch = useDispatch();

  //*************************** Connect WalletConnect ***************************** */

  const handleConnectWallet = async (params) => {
    if (!address) {
      open();
      setIsModalOpen(false);
    }
  };

  //************************** Connect MetaMask *************************** */
  const handleWalletConnectMetaMask = async (params) => {
    if (!window.ethereum) {
      alert('Please install Metamask');
      return;
    }

    await window.ethereum.send('eth_requestAccounts');
    window.ethereum.enable();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const result = await handleWalletConnect();
    console.log("result meta mask", result?.address);

    if (result.address) {
      localStorage.setItem('walletAddress', result?.address);
      dispatch(setWalletAddress(result.address));
    }
  };

  //************************* Disconnect Wallet *************************** */

  const handleDisconnectWallet = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        if (walletAddress && !address) {
          console.log('Revoking permissions');
          window.ethereum.request({
            method: 'wallet_revokePermissions',
            params: [
              {
                eth_accounts: {},
              },
            ],
          });
          localStorage.removeItem('walletAddress');
          console.log('disconnect successful');
        } else {
          await disconnect();
          console.log('Diconnect By Web3');
        }
      } catch (error) {
        console.error('Error revoking permissions:', error.message);
      }
    }
  };

  //************************** Get Wallet Acount ********************** */

  const addWalletListner = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      window.ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length > 0) {
          setErrorMessage(null);
        } else {
          setErrorMessage('Connect The Meta Mask Using This button');
        }
      });
    } else {
      setErrorMessage('Install Meta Desk !');
    }
  };

  //********************** Show Address in button ****************************** */

  const truncateAddress = (address, length) => {
    return address.slice(0, length) + '...';
  };

  const signer = useSelector((state) => state.signer);

  const handleClick = async () => {
    // const provider = new ethers.providers.Web3Provider(walletProvider);
    // const signer = provider.getSigner();
    console.log(signer);
    const signature = await signer?.signMessage('Hello Web3Modal Ethers');
    console.log("sign", signature);
  };

  return (
    <>
      <button onClick={handleClick}>Rahul</button>
      <button
        className={`bg-CustomGreenColor to-[#161328] rounded-lg text-black px-4 py-2 h-full flex items-center justify-center 
      ${isConnected || walletAddress ? 'bg-red-500' : ''}`}
        onClick={() =>
          isConnected  ? handleDisconnectWallet() : handleConnectWallet()
        }
      >
        <LuWallet2
          className="text-4xl"
          size={20}
          icon={faWallet}
          style={{ color: 'black' }}
        />

        <span className="text-[14px] ml-2 text-center font-medium hidden lg:inline ">
          {(address || walletAddress) && (address || walletAddress).length > 0
            ? truncateAddress(address || walletAddress, 6)
            : 'Connect wallet'}
        </span>
        {(address || walletAddress) && (address || walletAddress).length > 0 ? (
          <span className="ml-2 w-full">Disconnect</span>
        ) : null}
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
