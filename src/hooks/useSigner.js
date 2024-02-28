import { ethers } from 'ethers';
import { useWeb3ModalProvider } from '@web3modal/ethers5/react';
import { useEffect, useState } from 'react';

const useSigner = () => {
  const [signer, setSigner] = useState(null);
  const { walletProvider } = useWeb3ModalProvider();
  
  useEffect(() => {
    if (!walletProvider) return;
    const provider = new ethers.providers.Web3Provider(walletProvider);
    const signer = provider.getSigner();
    setSigner(signer);
  }, [walletProvider]);

  return signer;
};

export default useSigner;
