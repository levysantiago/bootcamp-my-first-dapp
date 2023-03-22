const abbreviateWalletAddress = (walletAddress: string) => {
  const size = walletAddress.length;
  const abbreviatedWalletAddress = `0x...${walletAddress
    .slice(size - 4, size)
    .toLocaleLowerCase()}`;
  return abbreviatedWalletAddress;
};

export default abbreviateWalletAddress;
