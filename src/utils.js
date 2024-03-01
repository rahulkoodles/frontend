export const truncateAddress = (address, length) => {
  return (
    address &&
    address.slice(0, length + 2) +
      "..." +
      address.slice(address.length - length)
  );
};
