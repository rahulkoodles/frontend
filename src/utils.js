export const truncateAddress = (address, length) => {
  return (
    address.slice(0, length + 2) + '...' + address.slice(address.length - length)
  );
};
