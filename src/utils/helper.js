  
  export function shortenEthereumAddress(address) {
    if (!address) return "";

    return `${address.substring(0, 4)}...${address.substring(
      address.length - 3
    )}`;
  }