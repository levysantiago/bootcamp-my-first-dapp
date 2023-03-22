export interface IMetamaskContext {
  walletAddress: string;
  isNetworkWrong: boolean;
  cryptoBalance: string;
  connect: () => Promise<string[] | undefined>;
}
